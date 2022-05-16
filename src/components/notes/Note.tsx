import { NoteProp } from '../../models/Note';
import { ModalProps } from '../../models/Modal';
import { useDeleteNote } from '../../hooks/useNotes';

import trashIcon from '../../assets/icons/trash-bin.png';

interface NoteProps extends NoteProp { 
  setShowModal: React.Dispatch<React.SetStateAction<ModalProps>>;
}

export const Note = ( { title, description, id, setShowModal }: NoteProps ) => {

  const { mutate } = useDeleteNote();

  return (
    <div className={`card animate__animated animate__fadeIn`}>
      <img src={ trashIcon } alt="trash" onClick={ () => mutate( id! ) }/>
      <div className="note" onClick={ () => setShowModal({ watch: true, id })}>
        <div className="note__tittle">
          <div className="note__title-top">
            <h4> Title </h4>
            <h3> { title } </h3>
          </div>
        </div>
        <div className="note__description">
          <h4> Description </h4>
          <p> { description } </p>
        </div>
      </div>
    </div>
  )
}
