import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import BattlePage from './components/BattlePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import PlayerMenuPage from './components/PlayerMenuPage'
import { getFromStorage, setInStorage } from './utils/storage'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ''
    }

    this.updateToken = this.updateToken.bind(this)
    this.writeToLocalStorage = this.writeToLocalStorage.bind(this)
    this.clearToken = this.clearToken.bind(this)
  }

  writeToLocalStorage(token) {
    setInStorage('covid_slayer', { token })
  }

  updateToken(token) {
    this.setState({ token })
  }

  clearToken() {
    this.setState({ token: '' })
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Route path='/' exact>
            <LoginPage
              token={this.state.token}
              updateToken={this.updateToken}
              writeToLocalStorage={this.writeToLocalStorage}
            />
          </Route>
          <Route path='/:id/battle' component={BattlePage} />
          <Route path='/signup' exact>
            <SignUpPage
              token={this.state.token}
            />
          </Route>
          <Route path='/:id/home'>
            <PlayerMenuPage
              token={this.state.token}
              playerId={this.state.playerId}
              updateToken={this.updateToken}
              clearToken={this.clearToken}
            />
          </Route>
        </Router>
      </div >
    )
  }
}

export default App
