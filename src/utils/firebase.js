// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth,} from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAjBKVv-SG7BkLeq6iNGZsdzjvRCUebfmw",
//   authDomain: "netflixgpt-883de.firebaseapp.com",
//   projectId: "netflixgpt-883de",
//   storageBucket: "netflixgpt-883de.firebasestorage.app",
//   messagingSenderId: "629919368575",
//   appId: "1:629919368575:web:8865980114b849b35c064a",
//   measurementId: "G-JW7Z4SRGNL",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS4XvV5Vh1WZls1Ig38-TopPQLjGsVRBk",
  authDomain: "netflix-gpt-57965.firebaseapp.com",
  projectId: "netflix-gpt-57965",
  storageBucket: "netflix-gpt-57965.firebasestorage.app",
  messagingSenderId: "318854454022",
  appId: "1:318854454022:web:c89826d85b5f846b3f5c87",
  measurementId: "G-8RQ49Z9E5N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Corrected: pass the app instance to getAuth
export const auth = getAuth(app);
