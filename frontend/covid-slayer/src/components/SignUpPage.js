import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      avatar: 0,
      redirect: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.redirect && !prevState.redirect) {
      this.setState({ redirect: false })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5050/players/signup/', this.state)
      .then(res => {
        alert('You have successfully created an account.')
        // redirect to login page.
        this.setState({ redirect: true })
      })
      .catch(err => {
        alert(err)
      })
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleAvatarChange = (e) => {
    this.setState({ avatar: Number(e.target.value) })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={'/'} />
      )
    }

    return (
      <div className='signup-page'>
        <Form onSubmit={this.handleSubmit}>
          <h1
            style={{ textAlign: 'center' }}>SIGN UP</h1>
          <br />
          <br />
          <Form.Group controlId='formBasicFullName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter full name'
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
          </Form.Group>
          <Form.Group controlId='formAvatarSelect'>
            <Form.Label>Avatar Selection</Form.Label>
            <Form.Control
              onChange={this.handleAvatarChange}
              as='select'
              defaultValue={this.state.avatar}
            >
              <option value={0}>Dummy Avatar</option>
            </Form.Control>
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            style={signUpBtnStyles}
          >
            Sign Up
          </Button>
          <div style={{ height: '10px' }} />
          <Link to='/'>
            <Button
              variant='secondary'
              style={cancelBtnStyles}
            >
              Cancel
            </Button>
          </Link>
        </Form>
      </div>
    )
  }
}

let signUpBtnStyles = {
  width: '100%', 
  height: '50px',
  fontSize: '24px',
}

let cancelBtnStyles = {
  width: '100%',
  fontSize: '20px'
}

export default SignUpPage