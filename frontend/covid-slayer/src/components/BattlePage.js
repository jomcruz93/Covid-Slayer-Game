import React from 'react'
import HealthBar from './HealthBar'
import ActionList from './ActionList'
import BattleLog from './BattleLog'
import { getRandomInt } from '../utils/randomNumber'


class BattlePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerHP: 100,
      enemyHP: 100,
      battleTime: 60,
      battlePaused: true,

      // attack action states
      attackCD: 3,
      attackCurrCD: 3,
      attackOnCD: false,
      attackMin: 1,
      attackMax: 10,

      // power attack action states
      powerCD: 8,
      powerCurrCD: 8,
      powerOnCD: false,
      powerMin: 7,
      powerMax: 15,

      // heal action states
      healCD: 10,
      healCurrCD: 10,
      healOnCD: false,
      healMin: 8,
      healMax: 20
    }

    this.handleAttack = this.handleAttack.bind(this)
    this.handlePower = this.handlePower.bind(this)
    this.handleHeal = this.handleHeal.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)
    this.updateBattleTime = this.updateBattleTime.bind(this)
  }

  componentDidMount() {
    // get actions info from avatar using avatar id
    // get enemy actions info from enemy id
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


  // Functions for handling action cooldowns.

  attackTimerTick() {
    if (this.state.attackCurrCD === 1) {
      this.setState({
        attackOnCD: false,
        attackCurrCD: this.state.attackCD
      })
      clearInterval(this.attackTimer)
    } else {
      this.setState(prev => ({
        attackCurrCD: prev.attackCurrCD - 1
      }))
    }
  }

  powerTimerTick() {
    if (this.state.powerCurrCD === 1) {
      this.setState({
        powerOnCD: false,
        powerCurrCD: this.state.powerCD
      })
      clearInterval(this.powerTimer)
    } else {
      this.setState(prev => ({
        powerCurrCD: prev.powerCurrCD - 1
      }))
    }
  }

  healTimerTick() {
    if (this.state.healCurrCD === 1) {
      this.setState({
        healOnCD: false,
        healCurrCD: this.state.healCD
      })
      clearInterval(this.healTimer)
    } else {
      this.setState(prev => ({
        healCurrCD: prev.healCurrCD - 1
      }))
    }
  }

  enemyTimerTick() {
    // use enemy tendencies to determine action
  }


  // Functions for handling button clicks.

  handleAttack(e) {
    this.setState(prev => ({
      enemyHP: prev.enemyHP
        - getRandomInt(this.state.attackMin, this.state.attackMax + 1),
      attackOnCD: true,
      attackCurrCD: this.state.attackCD
    }))

    this.attackTimer = setInterval(() => {
      this.attackTimerTick()
    }, 1000)
  }

  handlePower(e) {
    this.setState(prev => ({
      enemyHP: prev.enemyHP
        - getRandomInt(this.state.powerMin, this.state.powerMax + 1),
      powerOnCD: true,
      powerCurrCD: this.state.powerCD
    }))

    this.powerTimer = setInterval(() => {
      this.powerTimerTick()
    }, 1000)
  }

  handleHeal(e) {
    this.setState(prev => ({
      playerHP: prev.playerHP
        + getRandomInt(this.state.healMin, this.state.healMax + 1),
      healOnCD: true,
      healCurrCD: this.state.healCD
    }))

    this.healTimer = setInterval(() => {
      this.healTimerTick()
    }, 1000)
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

        {(this.state.enemyHP > 0) ?
          <div style={{ flex: 1 }}>image here</div>
          :
          <div style={{ flex: 1 }} />
        }

        <div className='battle-ui-container'>
          <ActionList
            handleAttack={this.handleAttack}
            handlePower={this.handlePower}
            handleHeal={this.handleHeal}
            handleGiveUp={this.handleGiveUp}

            attackCurrCD={this.state.attackCurrCD}
            attackOnCD={this.state.attackOnCD}

            powerCurrCD={this.state.powerCurrCD}
            powerOnCD={this.state.powerOnCD}

            healCurrCD={this.state.healCurrCD}
            healOnCD={this.state.healOnCD}
          />
          <BattleLog />
        </div>
      </div >
    )
  }
}

export default BattlePage
