import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse"
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Body = () =>{
    const dispatch = useDispatch();
    const auth = getAuth();
    const appRouter = createBrowserRouter([
         {
            path: "/",
            element: <Login/>
         },
         {
            path: "/browse",
            element: <Browse/>
         }
    ]);

    
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email,displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
    
      } else {
        // User is signed out
       dispatch(removeUser());
      
      }
    });
   },[])

    return (
    <div>
        <RouterProvider router={appRouter}>  </RouterProvider>
    </div>
    )
};
export default Body;