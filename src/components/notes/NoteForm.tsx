import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useMutateNote, useNote } from '../../hooks/useNotes';
import { MyTextField } from '../auth/MyTextField';
import { StateModal } from '../../models/Modal';
import { useEffect, useState } from 'react';
import { MyTextArea } from '../auth/MyTextArea';
import { NoteProp } from '../../models/Note';

import saveIcon from '../../assets/icons/save.png';
import note from '../../assets/icons/sticky-note.png';
import closeIcon from '../../assets/icons/close.png';

interface FormProps extends StateModal {
  id?: string;
}

export const NoteForm = ({ id, setShowModal }: FormProps ) => {

  const [initialValues, setInitialValues] = useState<NoteProp>({
    title: '',
    description: ''
  });
  
  const { isLoading, mutate, isSuccess } = useMutateNote( id );

  if ( id ) {
    const { data: note = {} } = useNote( id );
    useEffect(() => {
      setInitialValues({
        id,
        title: note.title,
        description: note.description
      });
    }, [ note ])
  }

  return (
    <div className='note__form'>
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
                <h3 className='introduction__tittle'> New Note! </h3>
                <img src={ note } alt="" />
              </div>
              <h4 className='title'> Please complete the fields. </h4>
              <MyTextField
                label="Title" 
                type='text'
                name="title"
              />
              <MyTextArea 
                label='Description'
                name='description'
              />
              <button 
                type='submit'
                disabled={!(formik.dirty && formik.isValid)} 
                className={
                  `button 
                  ${!(formik.isValid && formik.dirty) && 'button-disabled'} 
                  ${ isLoading && 'button-loading'}`
                }
                style={{ margin: '10px' }}
              >
                { id ? 'Update' : 'Save' }
                <img src={ saveIcon } alt="save" />
              </button>
            </div>
          </Form>
        )}
        </Formik>
    </div>
  )
}
