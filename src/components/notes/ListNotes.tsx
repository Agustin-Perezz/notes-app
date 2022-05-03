import { Note } from "./Note";
import { NoteProp } from '../../models/Note';
import { useNotes } from '../../hooks/useNotes';

import notesIcon from '../../assets/icons/publicalo.png';

export const ListNotes = () => {

  const { data: notes = [], isLoading, isError, } = useNotes();

  if ( isError ) return <h1> error get </h1>

  if ( isLoading ) return <h1> loading... </h1>

  return (
    <div className="notes">
      <div className="notes__head">
        <h2> List Notes </h2>
        <img src={ notesIcon } alt="notesIcon" />
      </div>
      {
        notes?.length !== 0 
        ?
          <div className="container__cards">
            {
              notes.map(( note: NoteProp ) => (
                <Note { ...note } key={ note.id } />
                ))
            }
          </div>
        :
        <h1> no tenes notes </h1>
      }
    </div>
  )
}
  