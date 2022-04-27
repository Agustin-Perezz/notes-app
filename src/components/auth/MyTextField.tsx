import { useField } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password',
    [x: string]: any,
}

export const MyTextField = ({ label, ...props }: Props) => {

  const [ field, meta ] = useField({ ...props }); 
    
  return (
      <div className='form'>
        <div className='form__div'>
            <input autoComplete='off' className={`form__input ${ meta.error && meta.touched && 'form__input-danger' }`} 
                { ...field } { ...props } 
            />
            <label className={`form__label ${ meta.error && meta.touched && 'form__error' }`}>
                { meta.error && meta.touched ? meta.error : label  } 
            </label>
        </div>
          
      </div>
  );
};