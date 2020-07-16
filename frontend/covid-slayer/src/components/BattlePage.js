import React from 'react'
import HealthBar from './HealthBar'
import LoginPage from './LoginPage'
import ActionList from './ActionList'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/*
<div style={{ width: '100%', display: 'flex' }}>
  <HealthBar type={0} healthValue={100} />
  <div style={{ flex: 1 }} />
  <HealthBar type={1} healthValue={88} />
</div>
*/

class BattlePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerHP: null,
      enemyHP: null,
      battleTime: 10,
      battlePaused: true
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.handleClick4 = this.handleClick4.bind(this)
    this.handleClick5 = this.handleClick5.bind(this)
    this.updateBattleTime = this.updateBattleTime.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.battleTime === 0 && prevState.battleTime > 0) {
      alert('Time\'s up!')
      this.setState({ battlePaused: true })
    }
  }

  updateBattleTime() {
    if (this.state.battleTime > 0 && !this.state.battlePaused) {
      this.setState(prev => ({
        battleTime: prev.battleTime - 1
      }))
    }
  }

  handleClick(e) {
    this.setState(prev => ({
      playerHP: 100,
      enemyHP: 100,
      battlePaused: !prev.battlePaused
    }))
  }

  handleClick2(e) {
    this.setState(prev => ({
      enemyHP: prev.enemyHP - 5
    }))
  }

  handleClick3(e) {
    this.setState(prev => ({
      enemyHP: prev.enemyHP - 15
    }))
  }

  handleClick4(e) {
    this.setState(prev => ({
      playerHP: prev.playerHP + 5
    }))
  }

  handleClick5(e) {
    alert('You have surrendered. Returning to start game interface.')
  }

  render() {
    return (
      <div>
        <HealthBar
          playerHealth={this.state.playerHP}
          enemyHealth={this.state.enemyHP}
          battleTime={this.state.battleTime}
          updateBattleTime={this.updateBattleTime}
        />
        <ActionList
          handleClick={this.handleClick}
          handleClick2={this.handleClick2}
          handleClick3={this.handleClick3}
          handleClick4={this.handleClick4}
          handleClick5={this.handleClick5}
        />
      </div >
    )
  }
}

export default BattlePage
