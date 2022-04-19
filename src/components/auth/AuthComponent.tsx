import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createUserEmailPassword, googleLogin, githubLogin, twitteLogin } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

export const AuthComponent = () => {

  const navigate = useNavigate();

  const { handleSubmit, touched,  errors, getFieldProps } 
    = useFormik({
    initialValues: {
      firstName: '',
      password: '',
      email: '', 
    },
    onSubmit: async( values ) => {
      await createUserEmailPassword( values );
      navigate('/notes/');
    },
    validationSchema: Yup.object({
      password: Yup.string()
                    .max( 15, 'Deve tener 15 caracteres o menos')
                    .required('Requerido'),
      email:     Yup.string()
                    .email('Email is not valid')
                    .required('Requerido'),
    })
  });
  
  const handleLoginGoogle = async() => {
    await googleLogin();
    navigate('/notes/');
  }

  const handleLoginGitHub = async () => {
    await githubLogin(); 
    navigate('/notes/');
  }

  const handleTwitter = async() => {
    await twitteLogin();
    navigate('/notes/');
  }

  return (
    <div>
      <div className="register">
        <form onSubmit={ handleSubmit }>
          <label htmlFor="email "> Email Addres </label>
          <input type="text" { ...getFieldProps('email') }/>
          { touched.email && errors.email && <span> { errors.email } </span> }

          <label htmlFor="password"> password </label>
          <input type="password" { ...getFieldProps('password') }/>
          { touched.password && errors.password && <span> { errors.password } </span> }

          <button type='submit'> Register </button>
        </form>
      </div>
      <div className="social">
        <button onClick={ handleLoginGoogle }> Google </button>
        <button onClick={ handleLoginGitHub }> Git Hub </button>
        <button onClick={ handleTwitter }> Twitter </button>
      </div>
    </div>
  )
}
