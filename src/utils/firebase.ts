// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCSzzujlY_8ZMavpeeYWj9A1k_hjHXr8Rc",
//   authDomain: "netflixgpt-cbf45.firebaseapp.com",
//   projectId: "netflixgpt-cbf45",
//   storageBucket: "netflixgpt-cbf45.firebasestorage.app",
//   messagingSenderId: "756556194901",
//   appId: "1:756556194901:web:e757cde23b0b3555be60dc",
//   measurementId: "G-51XBN128P7",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
