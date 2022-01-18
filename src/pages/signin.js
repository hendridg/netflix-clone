import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components'
import HeaderContainer from '../containers/header'
import * as ROUTES from '../constants/routes'
import FooterContainer from '../containers/footer'

export default function SignIn(){
    const { firebase } = useContext(FirebaseContext)
    const history = useHistory()
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    const isInvalid = password === '' | emailAddress === ''

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('');
                setPassword('');
                setError('');
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => setError(error.message))       

        // call in here to firebase to authenticate the user
        // if there's an error, populate the error state
    }
    
    return(
        <>
        <HeaderContainer textButton="Sign Up" to={ROUTES.SIGN_UP}>
            <Form>
               <Form.Title>Sign In</Form.Title>
               {error && <Form.Error>{error}</Form.Error>}
               <Form.Base onSubmit={handleSignin} method="POST">
                    <Form.Input 
                            type="email"
                            value={emailAddress}
                            placeholder="Email Address"
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                    <Form.Input 
                        type="password"
                        value={password}
                        autoComplete="off"
                        placeholder="Password"
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Button disabled={isInvalid} type="submit">Sign In</Form.Button>
                    <Form.Text>
                        New in Netflix?
                        <Form.Link to={ROUTES.SIGN_UP}> SignUp</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA.</Form.TextSmall>                    
               </Form.Base>
               
            </Form>
        </HeaderContainer>
        <FooterContainer/>
        </>
    )
}