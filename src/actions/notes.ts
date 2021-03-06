
import { auth } from "../firebase.config";
import { NoteProp } from '../models/Note';

const BASE_URL = 'https://intense-spire-90736.herokuapp.com/api/notes';

export const getNotes = async() => {
  
  const uid = auth.currentUser?.uid; 
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

export const getNote = async( id: string ) => {
  
  const uid = auth.currentUser?.uid; 
  try {
    const resp = await fetch( `${BASE_URL}/find`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id,
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

  const uid = auth.currentUser?.uid; 
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

    const newNote = await resp.json();
    return newNote;

  } catch (error) {
    console.log( error ); 
  }

}

export const deleteNote = async( id: string ) => {

  const uid = auth.currentUser?.uid; 
  try {
    await fetch( `${BASE_URL}/delet`, {
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

export const updateNote = async( valuesData: NoteProp ) => {

  const uid = auth.currentUser?.uid; 
  const id = valuesData.id;
  const data = {
    title: valuesData.title,
    description: valuesData.description
  }

  try {
    const resp = await fetch( `${BASE_URL}/update`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id,
        uid,
        data
      })
    });

    const values = await resp.json();
    return {
      ...values,
      id
    }

  } catch (error) {
    console.log( error ); 
  }

}