import { ListNotes, NavBar } from "../components/notes"
import { useState } from 'react';
import { NoteForm } from '../components/notes/NoteForm';

export const NotesPage = () => {

  const [viewForm, setViewForm] = useState( false );

  return (
    <div>
      <NavBar />
      <ListNotes />
      <button onClick={ () => setViewForm( prevState => !prevState ) }> add note </button>
      {
        viewForm && <NoteForm />
      }
      <footer> develop by banana agustin </footer>
    </div>
  )
}
