import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useMutateNote, useNote } from '../../hooks/useNotes';
import { MyTextField } from '../auth/MyTextField';
import { StateModal } from '../../models/Modal';
import { useEffect, useState } from 'react';
import { MyTextArea } from '../auth/MyTextArea';
import { NoteProp } from '../../models/Note';

import saveIcon from '../../assets/icons/save.png';
import updateIcon from '../../assets/icons/upload.png';
import note from '../../assets/icons/sticky-note.png';
import closeIcon from '../../assets/icons/close.png';

interface FormProps extends StateModal {
  id?: string;
}

export const NoteForm = ({ id, setShowModal }: FormProps ) => {

  const [initialValues, setInitialValues] = useState<NoteProp>({
    title: '',
    description: '',
  });
  
  const { isLoading, mutate } = useMutateNote( id );

  if ( id ) {
    const { data: note = {}, isSuccess } = useNote( id );
    useEffect(() => {
      setInitialValues({
        id,
        title: note.title || '',
        description: note.description || '',
      });
    }, [ isSuccess ])
  }

  return (
    <div className={`note__form animate__animated animate__zoomIn animate__faster`}>
        <Formik
          initialValues={ initialValues }
          enableReinitialize
          onSubmit={ async( values ) => {
            mutate( values );
            setShowModal({ watch: false });
          }}
          validationSchema= { Yup.object({
            title: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
          })
        }>
        {( formik ) => (
          <Form>
            <div className="l-form l-note">
              <img onClick={ () => setShowModal({ watch: false }) } className='close-icon' src={ closeIcon } alt="closeicon" />
              <div className="introduction">
                <h3 className='introduction__tittle'> { id ? 'Update Note!' : 'New Note!'} </h3>
                <img src={ note } alt="" />
              </div>
              <h4 className='title'>
                { id ? 'Please update the fields.' : 'Please complete the fields.'}
              </h4>
              <div className="box-inputs">
                <MyTextField
                  label="Title" 
                  type='text'
                  name="title"
                />
                <MyTextArea 
                  label='Description'
                  name='description'
                />
              </div>
              <button 
                type='submit'
                disabled={!(formik.dirty && formik.isValid)} 
                className={
                  `button 
                  ${!(formik.isValid && formik.dirty) && 'button-disabled'} 
                  ${ isLoading && 'button-loading'}
                  ${ id ? 'button-bg-update' : 'button-bg-save' }`
                }
                style={{margin: '10px'}}
              >
                { id ? 'Update' : 'Save' }
                <img src={ id ? updateIcon : saveIcon  } alt="save" />
              </button>
            </div>
          </Form>
        )}
        </Formik>
    </div>
  )
}
