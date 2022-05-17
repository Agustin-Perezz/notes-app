import toast from 'react-hot-toast';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, githubProvider, googleProvider, twitterProvider } from "../firebase.config";

interface Props {
  email: string;
  password: string;
}

export const createUserEmailPassword = async({ email, password }: Props ) => {
  try {
    const resp = await createUserWithEmailAndPassword( auth, email, password ); 
    return resp;
  } catch ( error: any ) {
    toast.error('Email is already in use', { style: { marginTop: '170px'}});
  }
}

export const signInEmailPassword = async({ email, password }: Props) => {
  try {
    const resp = await signInWithEmailAndPassword( auth, email, password );
    return resp;
  } catch (error) {
    toast.error('The username or password is incorrect.', { style: { marginTop: '170px'}});
    console.log( error );
  }
}

export const googleLogin = async() => {
  try {
    await signInWithPopup( auth, googleProvider );
  } catch (error) {
    toast.error('Account exists with different credential.', { style: { marginTop: '170px'}} );
    console.log( error ); 
  }
}

export const githubLogin = async() => {
  try {
    const resp = await signInWithPopup( auth, githubProvider );
    return resp;
  } catch (error) {
    toast.error('Account exists with different credential.', { style: { marginTop: '170px'}} );
    console.log( error )
  }
}

export const twitteLogin = async() => {
  try {
    // hay que esperar hasta el deploy para agregar twitter.
    await signInWithPopup( auth, twitterProvider );
  } catch (error) {
    toast.error('Account exists with different credential.', { style: { marginTop: '170px'}} );
    console.log( error ); 
  }
}

export const logout = async() => {
  await signOut( auth );
}

