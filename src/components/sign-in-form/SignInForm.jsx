import React from "react";
import { useState } from "react";
import {

  signInAuthUserWithEmailAndPass,
  signInWithGooglePopup,
} from "../../utils/firebase/Firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./SignInForm.styles.scss";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  
  const { email, password } = formFields;



  const resetFromFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
  };

  const onChangeHandler = (e) => {
    // setFormFields.e.target.name= e.target.value;
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPass(email, password);
      resetFromFields();
      
    } catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert('You entered a wrong password!!')
          break;

        case 'auth/user-not-found':
          alert('user do not exist with this email')
          break;
        
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
