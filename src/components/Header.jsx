import {signOut} from "firebase/auth";
import {useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () =>{
const Navigate = useNavigate();
const dispatch = useDispatch();
const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () =>{
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            Navigate("/");
          })
          .catch((error) => {
            // An error happened.
            Navigate("/error");
          });
    }

    const handleGptSearchClick = () =>{
      //toggle gpt search
      dispatch(toggleGptSearchView());

    }

    const handleLanguageChange = (e) =>{
        dispatch(changeLanguage(e.target.value));
    }
    return (
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44 p-3 " src="/assets/logo.png" alt="logo" />

        <div className="flex p-2">
          {showGptSearch && (
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
)}
          <button
            className="py-2 px-3 mx-3 bg-purple-600 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-12 h-12" src="/assets/profile_img.png" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign in)
          </button>
        </div>
      </div>
    );
}
export default Header;