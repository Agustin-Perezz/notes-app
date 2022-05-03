
import { auth } from "../firebase.config";
import { NoteProp } from '../models/Note';

const BASE_URL = 'http://localhost:3005/api/notes';
const uid = auth.currentUser?.uid; 

export const getNotes = async() => {

  try {
    const resp = await fetch( BASE_URL, {
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

export const addNote = async( valuesData: NoteProp ) => {

  try {
    const resp = await fetch( `${BASE_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        note: valuesData,
        uid
      })
    });

  } catch (error) {
    console.log( error ); 
  }

}

export const deleteNote = async( id: string ) => {

  try {
    const resp = await fetch( `${BASE_URL}/delet`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id,
        uid
      })
    });

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