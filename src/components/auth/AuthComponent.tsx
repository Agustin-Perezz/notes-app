import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { createUserEmailPassword, googleLogin, githubLogin, twitteLogin, signInEmailPassword } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';
import { MyTextField } from './MyTextField';
import { useState } from 'react';

import googleLogo from '../../assets/icons/google-icon.png';
import gitHubLogo from '../../assets/icons/github.png';
import twitterLogo from '../../assets/icons/twitter.png';
import hello from '../../assets/icons/cool.png';

export const AuthComponent = () => {

  const [registerType, setRegisterType] = useState('');
  const navigate = useNavigate();
  
  const handleLoginGoogle = async() => {
    const resp = await googleLogin();
    if ( resp ) { navigate('/notes/') };
  }

  const handleLoginGitHub = async () => {
    const resp = await githubLogin(); 
    if ( resp ) { navigate('/notes/') };
  }

  const handleTwitter = async() => {
    const resp = await twitteLogin();
    if ( resp ) { navigate('/notes/') };
  }

  return (
    <div className="register animate__animated animate__zoomIn ">
      <div className='register__container'>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={ async( values ) => {
            const resp = (registerType === 'register') 
            ? await createUserEmailPassword(values) 
            : await signInEmailPassword(values); 
            if ( resp ) { navigate('/notes/') };
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
            <div className="l-form ">
                <div className="register__head">
                  <h3> WELCOME! </h3>
                  <img className='hello' src={ hello } />
                </div>
                <h3 className='register__title'> Continue with social networks. </h3>
                <div className="register__redes">
                  <div className="register__social" onClick={ handleLoginGoogle }>
                    <img src={ googleLogo }  alt="Google Logo" />
                    <h6>Continue whit Google.</h6>
                  </div>
                  <div className="register__social" onClick={ handleLoginGitHub }>
                    <img src={ gitHubLogo }  alt="GitHub Logo"  />
                    <h6>Continue whit GitHub.</h6>
                  </div>
                  <div className="register__social" onClick={ handleTwitter }>
                    <img src={ twitterLogo }  alt="GitHub Logo" />
                    <h6>Continue whit Twitter.</h6>
                  </div>
                </div>
                <div className="box-auht-inputs">
                  <h3 className='register__title'> Or with the form. </h3>
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
                </div>
                <div className="register__buttons">
                  <button 
                    onClick={ () => setRegisterType('login') }
                    disabled={!(formik.dirty && formik.isValid)} 
                    className={`${ !formik.isValid && 'register__buttons-disabled' } `}
                    type='submit'
                  > 
                    Login 
                    </button>
                  <button 
                    onClick={ () => setRegisterType('register') }
                    disabled={!(formik.dirty && formik.isValid)} 
                    className={`${ !formik.isValid && 'register__buttons-disabled' } `}
                    type='submit'
                  > 
                    Register 
                  </button>
                </div>
              </div>
          </Form>
        )}
        </Formik>
        </div>
    </div>
  )
}
