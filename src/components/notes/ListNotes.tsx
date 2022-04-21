import { useQuery } from "react-query"
import { getNotes } from '../../actions/notes';
import { Note } from "./Note";
import { NoteProp } from '../../models/Note';

export const ListNotes = () => {

  const { 
    data: notes, 
    isLoading, 
    isError,
   } = useQuery(["notes"], getNotes );

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
