import { ListNotes, NavBar } from "../components/notes"
import { useState } from 'react';
import { NoteForm } from '../components/notes/NoteForm';

import addNoteIcon from '../assets/icons/add-note.png';

export const NotesPage = () => {

  const [viewForm, setViewForm] = useState( false );

  return (
    <div className={`container__notes ${ viewForm && 'container__notes-bg'}`}>
      <NavBar />
      {/* mandar el setViewForm */}
      <ListNotes />
      <div 
        className="container__notes-add"
        onClick={ () => setViewForm( prevState => !prevState ) }
      > 
        <h6> Add Note </h6> 
        <img src={ addNoteIcon } alt="add" />
      </div>
      {
        // mandar el setviewForm tmb en el noteform
        viewForm && <NoteForm />
      }
      <footer> develop by banana agustin </footer>
    </div>
  )
}
