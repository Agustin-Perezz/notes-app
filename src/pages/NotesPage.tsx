import { ListNotes, NavBar } from "../components/notes"
import { useState } from 'react';
import { NoteForm } from '../components/notes/NoteForm';
import { ModalProps } from '../models/Modal';

import addNoteIcon from '../assets/icons/add-note.png';

export const NotesPage = () => {

  const [showModal, setShowModal] = useState<ModalProps>({ watch: false });

  return (
    <div className="container__notes">
      <NavBar />
      <ListNotes setShowModal={ setShowModal }/>
      <div className="container__notes-add" onClick={ () => setShowModal({ watch: true }) }> 
        <h6> Add Note </h6> 
        <img src={ addNoteIcon } alt="add" />
      </div>
      {
        showModal.watch && 
        <div className="modal-bg">
          <NoteForm { ...showModal } setShowModal={ setShowModal } />
        </div>
      }
      <footer> develop by banana agustin </footer>
    </div>
  )
}
