import { Note } from "./Note";
import { NoteProp } from '../../models/Note';
import { useNotes } from '../../hooks/useNotes';

export const ListNotes = () => {

  const { data: notes, isLoading, isError, } = useNotes();

  if ( isError ) return <h1> error get </h1>

  return (
    <div>
      <h2> pepe </h2>
      {
        isLoading
        ?
        <h1> loading notes... </h1>
        :
        <div>
        {
          notes.map(( note: NoteProp ) => (
            <Note { ...note } key={ note.id } />
          ))
        }
        </div>
      }
    </div>
  )
}
