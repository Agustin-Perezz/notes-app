import * as Yup from 'yup';
import { Formik, useFormik, Form, Field } from 'formik';
import { useMutateNote } from '../../hooks/useNotes';
import { MyTextField } from '../auth/MyTextField';
import { MyTextArea } from '../auth/MyTextArea';

import saveIcon from '../../assets/icons/save.png';
import note from '../../assets/icons/sticky-note.png';


export const NoteForm = () => {

  const { isLoading, mutate, isSuccess } = useMutateNote( '1');

  // aca hacemos fetchin del cache de la nota por el id y lo pasamos en init
  // si no hay nada queda vacio
  // cambiar el initValues por nuestro propio objeto
  
  return (
    <div className='note__form'>
        <Formik
          initialValues={{
            title: '',
            description: '',
          }}
          onSubmit={ async( values ) => {
            mutate( values, {
              onSuccess: () => {
                // clean inputs despues del add note
              }
            });
          }}
          validationSchema= { Yup.object({
            title:         Yup.string()
                          .required('Required'),
            description:   Yup.string()
                          .required('Required'),
          })
        }>

        {( formik ) => (
          <Form>
            <div className="l-form l-note">
                <div className="introduction">
                  <h3 className='introduction__tittle'> New Note! </h3>
                  <img src={ note } alt="" />
                </div>
                <h4 className='title'> Please complete the fields. </h4>
                <MyTextField
                  label="Title" 
                  name="title"
                />
                <MyTextArea 
                  label='Description'
                  name='description'
                />
                  <button 
                    disabled={!(formik.dirty && formik.isValid)} 
                    className={`button ${ !(formik.isValid && formik.dirty) && 'button-disabled' }`}
                    style={{ margin: '10px' }}
                  >
                    {/* condicional si es save | update  */}
                    Save 
                    <img src={ saveIcon } alt="save" />
                  </button>
                </div>
          </Form>
        )}
        </Formik>
    </div>
  )
}
