import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { createUserEmailPassword, googleLogin, githubLogin, twitteLogin } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { MyTextField } from './MyTextField';

import googleLogo from '../../assets/icons/google-icon.png';
import gitHubLogo from '../../assets/icons/github.png';
import twitterLogo from '../../assets/icons/twitter.png';
import hello from '../../assets/icons/hello.png';

export const AuthComponent = () => {

  const navigate = useNavigate();
  
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
    <div className="register">
      <div className='register__container'>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={ async( values ) => {
            await createUserEmailPassword( values );
            navigate('/notes/')
          }}
          validationSchema= { Yup.object({
            password: Yup.string()
                          .min( 5, 'Min 6 characters')
                          .required('Required'),
            email:     Yup.string()
                          .email('Email is not valid')
                          .required('Required'),
          })
        }>


        {( formik ) => (
          <Form>
            <div className="l-form">
                <img className='hello' src={ hello } />
                <h3 className='register__title'> Please register below. </h3>
                <MyTextField 
                  label="Email Adress" 
                  name="email"
                  type='email'
                />
                <MyTextField 
                  label="Password" 
                  name="password"
                  type='password'
                />
                <button 
                  disabled={!(formik.dirty && formik.isValid)} 
                  className={`form__button ${ !formik.isValid && 'form__button-disabled' }`}
                > 
                  Register 
                </button>
              </div>
          </Form>
        )}
        </Formik>
        
          <h4> or login with social </h4>
          <div className="register__social">
            <img src={ googleLogo }  alt="Google Logo" onClick={ handleLoginGoogle }/>
            <img src={ gitHubLogo }  alt="GitHub Logo" onClick={ handleLoginGitHub } />
            <img src={ twitterLogo }  alt="GitHub Logo" onClick={ handleLoginGitHub } />
          </div>
        </div>
    </div>
  )
}
