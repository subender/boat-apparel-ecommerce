import "./Authentication.styles.scss"
import React from 'react'
import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/signup-form/SignUpForm';



const Authentication = () => {

  
  return (
    <div className='authentication-container'>
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication