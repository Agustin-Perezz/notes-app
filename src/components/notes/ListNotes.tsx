import { Note } from "./Note";
import { NoteProp } from '../../models/Note';
import { StateModal } from "../../models/Modal";
import { useNotes } from '../../hooks/useNotes';

import notesIcon from '../../assets/icons/check-list.png';

export const ListNotes = ( { setShowModal }: StateModal ) => {

  const { data: notes = [], isLoading, isError, } = useNotes();

  if ( isError ) return <h1> error get </h1>

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
              // generar uid aleatorio jlkpara el key si o si
              notes.map(( note: NoteProp ) => {
                return <Note { ...note } key={ note.id } setShowModal={ setShowModal } />
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
  