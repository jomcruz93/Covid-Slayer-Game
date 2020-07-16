import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { getFromStorage } from '../utils/storage'

class PlayerMenuPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerId: '',
      email: '',
      fullName: '',
      playerAvatarId: ''
    }
  }

  componentDidMount() {
    // check localstorage for token.
    const obj = getFromStorage('covid_slayer')

    let token = null
    if (obj && obj.token && !this.props.token) {
      token = obj.token
    } else if (this.props.token) {
      token = this.props.token
    }

    if (token) {
      // retrieve player id using the token.
      axios.get(
        'http://localhost:5050/players/session?token='
        + token)
        .then(res1 => {
          const playerId = res1.data.playerId

          // retrieve player info using the player id obtained.
          axios.get(
            'http://localhost:5050/players/query?playerId='
            + playerId)
            .then(res2 => {
              this.setState({
                playerId,
                email: res2.data.email,
                fullName: res2.data.fullName,
                playerAvatarId: res2.data.playerAvatarId
              })

              this.props.updateToken(token)
            })
        })
        .catch(err => alert(err))
    }
  }

  handleStartBattleBtn = (e) => {
    e.preventDefault()

  }

  handleLogOutBtn = (e) => {
    e.preventDefault()

    // remove token from localstorage.
    localStorage.removeItem('covid_slayer')

    // set 'hasEnded' field of the doc in the database.
    axios.get('http://localhost:5050/players/logout?token=' + this.props.token)
      .then(res => {
        this.setState({
          playerId: '',
          playerAvatarId: '',
          fullName: '',
          email: ''
        })
        this.props.clearToken()
        alert('You have been logged out.')
      })
      .catch(err => alert(err))
  }

  render() {
    if (!this.props.token) {
      return (<Redirect to='/' />)
    }

    return (
      <div className='player-menu'>
        <h1 style={{ textAlign: 'center' }}>COVID SLAYER</h1>
        <br />
        <br />
        <h2 style={{ textAlign: 'center' }}>
          Welcome <br />{this.state.fullName}
        </h2>
        <br />
        <Button onClick={this.handleStartBattleBtn} style={btnStyles}>Start Battle</Button>
        <Button onClick={this.handleLogOutBtn} style={btnStyles}>Log Out</Button>
      </div>
    )
  }
}

let btnStyles = {
  height: '100px',
  width: '50%',
  fontWeight: 'bold',
  fontSize: 'calc(20px + 2vw)',
  marginBottom: '50px'
}

export default PlayerMenuPage