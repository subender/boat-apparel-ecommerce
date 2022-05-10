
import React from 'react'
import SignUpForm from '../../components/signup-form/SignUpForm';
import {signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/Firebase'

const SignIn = () => {

  const logGoogleUser = async ()=>{
    const {user} =  await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);

  }

  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={logGoogleUser}> 
        Sign in With Google
      </button>

      <SignUpForm/>
    </div>
  )
}

export default SignIn