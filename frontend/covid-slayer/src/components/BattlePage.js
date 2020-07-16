import React from 'react'
import HealthBar from './HealthBar'
import LoginPage from './LoginPage'
import ActionList from './ActionList'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { getRandomInt } from '../utils/randomNumber'

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
      playerHP: 100,
      enemyHP: 100,
      battleTime: 60,
      battlePaused: true
    }

    this.handleAttack = this.handleAttack.bind(this)
    this.handlePower = this.handlePower.bind(this)
    this.handleHeal = this.handleHeal.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.updateBattleTime = this.updateBattleTime.bind(this)
  }

  componentDidMount() {
    // get actions from avatar using avatar id
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

  handleAttack(e) {
    this.setState(prev => ({
      enemyHP: prev.enemyHP - getRandomInt(1, 11)
    }))
  }

  handlePower(e) {
    this.setState(prev => ({
      enemyHP: prev.enemyHP - getRandomInt(7, 15)
    }))
  }

  handleHeal(e) {
    this.setState(prev => ({
      playerHP: prev.playerHP + getRandomInt(10, 20)
    }))
  }

  handleGiveUp(e) {
    alert('You have surrendered. Returning to start game interface.')
  }

  render() {
    return (
      <div className='battle-page-container'>
        <HealthBar
          playerHealth={this.state.playerHP}
          enemyHealth={this.state.enemyHP}
          battleTime={this.state.battleTime}
          updateBattleTime={this.updateBattleTime}
        />
        <div style={{ flex: 1 }} />
        <div className='battle-ui-container'>
          <ActionList
            handleAttack={this.handleAttack}
            handlePower={this.handlePower}
            handleHeal={this.handleHeal}
            handleGiveUp={this.handleGiveUp}
          />
          <div className='battle-log-box' />
        </div>

      </div >
    )
  }
}

export default BattlePage
