import React from 'react'
import './App.css'
import BattlePage from './components/BattlePage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <SignUpPage />
      </div >
    )
  }
}

export default App
