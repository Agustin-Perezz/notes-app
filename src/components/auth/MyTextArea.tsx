import { useField, Field } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password',
    [x: string]: any,
}

export const MyTextArea = ({ label, ...props }: Props) => {

  const [ field, meta ] = useField({ ...props }); 

  return (
      <div className='form'>
        <div className='form__div xl'>
            <Field as='textarea' className={`form__input ${ meta.error && meta.touched && 'form__input-danger' }`} 
            { ...field } { ...props } 
            />
            <label className={`form__label ${ meta.error && meta.touched && 'form__error' }`}>
                { meta.error && meta.touched ? meta.error : label  } 
            </label>
        </div>
      </div>
  );
}
