import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, githubProvider, googleProvider, twitterProvider } from "../firebase.config";

interface Props {
  email: string;
  password: string;
}

export const createUserEmailPassword = async({ email, password }: Props ) => {
  try {
    await createUserWithEmailAndPassword( auth, email, password ); 
  } catch (error) {
    console.log( error );
  }
}

export const googleLogin = async() => {
  try {
    await signInWithPopup( auth, googleProvider );
  } catch (error) {
    console.log( error ); 
  }
}

export const githubLogin = async() => {
  try {
    await signInWithPopup( auth, githubProvider );
  } catch (error) {
    console.log( error ); 
  }
}

export const twitteLogin = async() => {
  try {
    // hay que esperar hasta el deploy para agregar twitter.
    await signInWithPopup( auth, twitterProvider );
  } catch (error) {
    console.log( error ); 
  }
}

export const logout = async() => {
  await signOut( auth );
}