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
import {getFromStorage, setInStorage} from './utils/storage'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tokenId: '',
      playerId: ''
    }
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Route path='/' exact>
            <LoginPage />
          </Route>
          <Route path='/:id/battle' exact>
            <BattlePage />
          </Route>
          <Route path='/signup' exact>
            <SignUpPage />
          </Route>
          <Route path='/:id' exact>
            <PlayerMenuPage />
          </Route>
        </Router>
      </div >
    )
  }
}

export default App
