
// const API_URL = process.env.API_KEY;

import { auth } from "../firebase.config";

export const getNotes = async() => {

  const uid = auth.currentUser?.uid; 
  console.log( JSON.stringify( { uid } ))
  try {
    const resp = await fetch( 'http://localhost:3005/api/notes/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        uid
      })
    });

    const data = await resp.json();
    return data;

  } catch (error) {
    console.log( error ); 
  }
}

// para un futuro
// const getUserToken = async() => {
//   const userToken = await auth.currentUser?.getIdToken();
//   console.log( userToken )
//   return userToken;
// }