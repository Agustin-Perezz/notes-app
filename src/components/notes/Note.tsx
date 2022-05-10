import { NoteProp } from '../../models/Note';
import { deleteNote } from '../../actions/notes';
import { useQueryClient } from 'react-query';
import { ModalProps } from '../../models/Modal';

import trashIcon from '../../assets/icons/trash-bin.png';

interface NoteProps extends NoteProp { 
  setShowModal: React.Dispatch<React.SetStateAction<ModalProps>>;
}

export const Note = ( { title, description, id, setShowModal }: NoteProps ) => {

  const queryClient = useQueryClient();

  const handleDelet = async() => {
    await deleteNote( id! );
    queryClient.invalidateQueries(['notes']);
  }
  
  return (
    <div className='card' >
      <img src={ trashIcon } alt="trash" onClick={ handleDelet }/>
      <div className="note" onClick={ () => setShowModal({ watch: true, id })}>
        <div className="note__tittle">
          <div className="note__title-top">
            <h4> Title </h4>
            <h3> { title } </h3>
          </div>
        </div>
        <div className="note__description">
          <h4> Description </h4>
          <p>{ description } </p>
        </div>
      </div>
    </div>
  )
}
