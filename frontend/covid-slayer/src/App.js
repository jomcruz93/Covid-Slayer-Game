import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import BattlePage from './components/BattlePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Route path='/' exact>
            <LoginPage />
          </Route>
          <Route path='/battle' exact>
            <BattlePage />
          </Route>
          <Route path='/signup' exact>
            <SignUpPage />
          </Route>
        </Router>
      </div >
    )
  }
}

export default App
