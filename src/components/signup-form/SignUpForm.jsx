import { useState } from "react";
import {
  createAuthUserWithEmailAndPass,
  createUserDocFromAuth,
} from "../../utils/firebase/Firebase";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import './SignUpForm.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;



  const resetFromFields = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = (e) => {
    // setFormFields.e.target.name= e.target.value;
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Your Password don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPass(email, password);

     
      await createUserDocFromAuth(user, { displayName });

      resetFromFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user email already in use.");
      } else {
        console.log("somting went wrong !!", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>


 
        <FormInput
        label="Display Name"
          type="text"
          required
          onChange={onChangeHandler}
          name="displayName"
          value={displayName}
        />
        

      
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

   
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
