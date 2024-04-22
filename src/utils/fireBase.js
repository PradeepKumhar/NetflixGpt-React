// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx05cbaUVr6HrRIcVDk30CWIGWy75c1Uw",
  authDomain: "netflixgpt-d4768.firebaseapp.com",
  projectId: "netflixgpt-d4768",
  storageBucket: "netflixgpt-d4768.appspot.com",
  messagingSenderId: "908998758822",
  appId: "1:908998758822:web:d572d6be82c4cf62db3f67",
  measurementId: "G-PZFMN3E4GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();