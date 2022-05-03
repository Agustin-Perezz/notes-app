import { NoteProp } from '../../models/Note';

import trashIcon from '../../assets/icons/trash-bin.png';
import { deleteNote } from '../../actions/notes';
import { QueryClient, useQueryClient } from 'react-query';

export const Note = ({
  title,
  description,
  id
}: NoteProp ) => {

  const queryClient = useQueryClient();

  const note = {
    title, 
    description,
    id
  }

  const handleDelet = async() => {
    console.log( id )
    await deleteNote( id! );

    // tarda una banda
    queryClient.invalidateQueries(['notes']);
  }
  
  return (
    <div className='card'>
        <div className="note">
          <div className="note__tittle">
            <div className="note__title-top">
              <h4> Title </h4>
              <h3> { title } </h3>
            </div>
            <img src={ trashIcon } alt="trash" onClick={ handleDelet }/>
          </div>
          <div className="note__description">
            <h4> Description </h4>
            <p>{ description } </p>
          </div>
        </div>
    </div>
  )
}
