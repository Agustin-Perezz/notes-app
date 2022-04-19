import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG9Ys_RBeW3Z9TFsCR5deOCx689c6YRdM",
  authDomain: "authentication-todo-app-609e3.firebaseapp.com",
  projectId: "authentication-todo-app-609e3",
  storageBucket: "authentication-todo-app-609e3.appspot.com",
  messagingSenderId: "916970858781",
  appId: "1:916970858781:web:1119ef0c2fddfb5121d9f4"
};

export const app = initializeApp( firebaseConfig );

const auth = getAuth( app );
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export {
  auth,
  googleProvider,
  githubProvider,
  twitterProvider,
} 
