import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, githubProvider, googleProvider, twitterProvider } from "../firebase.config";
import toast from 'react-hot-toast';

interface Props {
  email: string;
  password: string;
}


export const createUserEmailPassword = async({ email, password }: Props ) => {
  try {
    console.log('hi')
    await createUserWithEmailAndPassword( auth, email, password ); 
  } catch ( error: any ) {
    console.log( ` this is at error ${ error.message } ` ); } 
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
    const resp = await signInWithPopup( auth, githubProvider );
    return resp;
  } catch (error: any) {
    toast.error( error.message, { style: { marginTop: '160px'}} );
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

