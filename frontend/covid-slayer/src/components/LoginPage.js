import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { getFromStorage } from '../utils/storage'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    // check localstorage for token.
    const obj = getFromStorage('covid_slayer')
    if (obj && obj.token) {
      this.props.updateToken(obj.token)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:5050/players/login/', this.state)
    .then(res => {
      const token = res.data.tokenId
      this.props.writeToLocalStorage(token)
      this.props.updateToken(token)
      alert('You have successfully logged in.')
    })
    .catch(err => {
      alert('Error: User not found.')
    })
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  render() {
    if (this.props.token) {
      return (
        <Redirect to={'/' + this.props.token + '/home'} />
      )
    }
    return (
      <div className='login-page'>
        <Form onSubmit={this.handleSubmit}>
          <h1 style={{ textAlign: 'center' }}>COVID SLAYER</h1>
          <br />
          <h3 style={{ textAlign: 'center' }}>Login to play!</h3>
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
          <Button
            variant="primary"
            type="submit"
            style={{ width: '100%' }}
          >
            Login
          </Button>
          <div style={{ height: '15px' }} />
          <p>Don't have an account? <Link to='/signup'>Sign up here.</Link></p>
        </Form>
      </div>
    )
  }
}

export default LoginPage