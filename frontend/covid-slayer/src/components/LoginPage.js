import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    // axios.post(
    //   'http://localhost:5050/players/add/', 
    // )
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    return (
      <div className='login-page'>
        <Form onSubmit={this.handleSubmit}>
          <h1
            style={{ textAlign: 'center' }}>COVID SLAYER</h1>
          <br />
          <br />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Sign-In automatically" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button variant="primary">
            Sign Up
          </Button>
        </Form>
      </div>
    )
  }
}

export default LoginPage