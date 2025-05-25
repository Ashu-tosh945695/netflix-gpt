import { useRef, useState } from "react";
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true);
     
    const [errorMessage,setErrorMessage] = useState(null);
    const Navigate = useNavigate();


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick =()=>{
        // Validate the form data--
       const message = checkValidData(email.current.value, password.current.value);
       //    console.log(message);
       setErrorMessage(message);
       if(message) return;

    // sign in / sign up logic---

    if(!isSignInForm){
        // sign up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            })
              .then(() => {
                Navigate("/browse");
              })
              .catch((error) => {
               setErrorMessage(error.message)
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"_" +errorMessage);
          });

    }else{
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            Navigate("/browse");
            console.log("user signed in;", user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"_"+ errorMessage)
          });
       

    }



    }

    const toggleSignInForm = () =>{
            setIsSignInForm(!isSignInForm);
    };

    return (
      <div>
        <Header />
        <div className="absolute">
          <img src="/assets/background_banner.jpg" alt="logo" />
        </div>

        <form onSubmit = {(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign in Now."}
          </p>
        </form>
      </div>
    );
};
export default Login;