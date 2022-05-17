import { Note } from "./Note";
import { NoteProp } from '../../models/Note';
import { StateModal } from "../../models/Modal";
import { useNotes } from '../../hooks/useNotes';

import notesIcon from '../../assets/icons/check-list.png';

export const ListNotes = ( { setShowModal }: StateModal ) => {

  const { data: notes = [], isLoading } = useNotes();

  return (
    <div className="notes">
      <div className="notes__head">
        <h2> List Notes </h2>
        <img src={ notesIcon } alt="notesIcon" />
      </div>
      { isLoading && <div className="spinner"></div>}
      {
        notes?.length !== 0 
        ?
          <div className="container__cards">
            {
              notes.map(( note: NoteProp, index: any ) => {
                return <Note { ...note } key={ index } setShowModal={ setShowModal } />
              })
            }
          </div>
        :
        <>
          { !isLoading &&  <small> ( you don't have notes yet )  </small> }
        </>
      }
    </div>
  )
}
  