import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useMutateNote } from '../../hooks/useNotes';

export const NoteForm = () => {

  const { isLoading, mutate, isSuccess } = useMutateNote();

  const { handleSubmit, touched, errors, getFieldProps } 
  = useFormik({
  initialValues: {
    title: '',
    description: '', 
  },
  onSubmit: async( values ) => {
    mutate( values, {
      onSuccess: () => {
        // clean inputs despues del add note
      }
    });
  },
  validationSchema: Yup.object({
      title: Yup.string()
                    .max( 35, 'Max 15 characters')
                    .required('Requerido'),
      description:   Yup.string()
                    .required('Requerido'),
    }),
  });
  
  return (
    <div>
        <form onSubmit={ handleSubmit }>
          <label htmlFor="title "> Title </label>
          <input type="text" { ...getFieldProps('title') }/>
          { touched.title && errors.title && <span> { errors.title } </span> }

          <label htmlFor="description"> description </label>
          <input type="text" { ...getFieldProps('description') }/>
          { touched.description && errors.description && <span> { errors.description } </span> }

          <button type='submit'> Save </button>
          { isLoading && <span> saving... </span>}
          { isSuccess && <span> saved!! </span>}
      </form>
    </div>
  )
}
