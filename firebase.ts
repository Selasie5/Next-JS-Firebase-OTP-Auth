// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrT-zj5SIV3O9WRTf91quCJFtM8tE8jDU",
  authDomain: "next-js-otp-tutorial.firebaseapp.com",
  projectId: "next-js-otp-tutorial",
  storageBucket: "next-js-otp-tutorial.appspot.com",
  messagingSenderId: "635826254917",
  appId: "1:635826254917:web:1042c6c35f77d24f615f2c"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth =  getAuth(app);
auth.useDeviceLanguage();
export {auth}