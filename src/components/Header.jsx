import {signOut} from "firebase/auth";
import {useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
const Header = () =>{
const Navigate = useNavigate();
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
    return (
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44 p-3 " src="/assets/logo.png" alt="logo" />

          <div className="flex p-2">
            <img className="w-12 h-12" src="/assets/profile_img.png" />
            <button onClick={handleSignOut} className="font-bold text-white">
              (Sign out)
            </button>
          </div>
    
      </div>
    );
}
export default Header;