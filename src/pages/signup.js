import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { FirebaseContext } from "../context/firebase"
import { Form } from "../components"
import HeaderContainer from "../containers/header"
import * as ROUTES from "../constants/routes"
import FooterContainer from "../containers/footer"

export default function SignUp() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [error, setError] = useState("")
  const [firstName, setFirstName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")

  const isInvalid = firstName === "" || password === "" || emailAddress === ""

  const handleSignup = (event) => {
    event.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setEmailAddress("")
            setPassword("")
            setError("")
            history.push(ROUTES.BROWSE)
          })
      )
      .catch((error) => setError(error.message))
  }

  return (
    <>
      <HeaderContainer textButton="Sign In">
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="User Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Button disabled={isInvalid} type="submit">
              Sign Up
            </Form.Button>
            <Form.Text>
              Already in Netflix?
              <Form.Link to={ROUTES.SIGN_IN}> SignIn</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
