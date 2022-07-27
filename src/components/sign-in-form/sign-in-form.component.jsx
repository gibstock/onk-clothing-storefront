import { useState } from "react";

import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword 
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { 
  SignInContainer,
  ButtonsContainer,
  H2
} from './sign-in-form.styles.jsx'
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();

  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
    }catch (err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(err)
      }
    }
  }
  
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
  }
  return(
    <SignInContainer>
      <H2>I already have an account</H2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput 
          label="Email"
          type="email" 
          required 
          onChange={handleChange} 
          name='email' 
          value={email}
        />
        <FormInput
          label="Password" 
          type="password" 
          required 
          onChange={handleChange} 
          name='password' 
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit" onClick={handleSubmit}>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >GOOGLE SIGN IN</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm