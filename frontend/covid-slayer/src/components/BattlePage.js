import React from 'react'
import HealthBar from './HealthBar'
import ActionList from './ActionList'
import BattleLog from './BattleLog'
import { getRandomInt } from '../utils/randomNumber'
import { arrayToTxtDownloadable } from '../utils/storage'

class BattlePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // battle info states
      battleStart: false,
      battleTimeMax: 60,
      battleTime: 60,
      playerHP: 100,
      enemyHP: 100,

      // for logging
      battleLogs: [],

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
      healMax: 20,

      // enemy action states
      enemyName: 'Covid Monster',
      enemyActionRate: 0.4,
      enemyWeakAtkRate: 0.75,
      enemyStrongAtkRate: 0.35,
      enemyWeakAtkMin: 1,
      enemyWeakAtkMax: 10,
      enemyStrongAtkMin: 10,
      enemyStrongAtkMax: 20
    }

    this.startBattle = this.startBattle.bind(this)
    this.endBattle = this.endBattle.bind(this)

    this.handleSettingsBtn = this.handleSettingsBtn.bind(this)

    this.handleAttack = this.handleAttack.bind(this)
    this.handlePower = this.handlePower.bind(this)
    this.handleHeal = this.handleHeal.bind(this)
    this.handleGiveUp = this.handleGiveUp.bind(this)

    this.updateBattleTime = this.updateBattleTime.bind(this)
  }

  componentDidMount() {
    // get actions info from avatar using avatar id
    // get enemy actions info from enemy id
    // const { fullName } = this.props.location.state
    // console.log(fullName)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.battleTime === 0 && prevState.battleTime > 0) {
      // check who wins
      if (this.state.playerHP > this.state.enemyHP) {
        alert('Time\'s up. You won!')
      } else if (this.state.enemyHP > this.state.playerHP) {
        alert('Time\'s up. You lost!')
      } else {
        alert('Time\'s up. It\'s a draw!')
      }

      this.endBattle()
    }

    // check if player health reached zero.
    if (this.state.playerHP != prevState.playerHP && this.state.playerHP <= 0) {
      alert('The battle has ended. You lost!')
      this.endBattle()
    } else if (this.state.enemyHP != prevState.enemyHP && this.state.enemyHP <= 0) {
      alert('The battle has ended. You won!')
      this.endBattle()
    }
  }

  startBattle() {
    this.setState({
      battleStart: true,
      battleTime: this.state.battleTimeMax,
      playerHP: 100,
      enemyHP: 100,
      battleLogs: []
    })

    // start enemy timer
    this.enemyTimer = setInterval(() => {
      this.enemyTimerTick()
    }, 1000)
  }

  endBattle() {
    this.setState({
      battleStart: false
    })

    // save battle logs locally
    // create the log as downloadable txt file
    let currDate = new Date().toJSON().slice(0, 10).replace(/-/g, '')
    let fileName = `${currDate}_logs.txt`
    let logArr = [...this.state.battleLogs]
    arrayToTxtDownloadable(logArr, fileName)

    // save battle logs to database
  }

  handleSettingsBtn() {
    const enteredTimelimit = prompt('Set battle time limit.')
    this.setState({
      battleTimeMax: enteredTimelimit,
      battleTime: enteredTimelimit
    })
  }

  updateBattleTime() {
    if (this.state.battleTime > 0 && this.state.battleStart) {
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
    // every second, enemy rolls a chance to attack

    if (this.state.battleStart && Math.random() <= this.state.enemyActionRate) {
      if (Math.random() <= this.state.enemyWeakAtkRate) {
        let value = getRandomInt(this.state.enemyWeakAtkMin, this.state.enemyWeakAtkMax + 1)
        let d = new Date()
        let localTime = d.toLocaleTimeString('en-GB')
        let actionLog =
          `[${localTime}] `
          + `${this.state.enemyName} `
          + `used attack on ${this.props.location.state.fullName}. `
          + `Dealt ${value} dmg.`
        let tempArr = [...this.state.battleLogs]
        tempArr.push(actionLog)

        this.setState(prev => ({
          playerHP: prev.playerHP - value,
          battleLogs: tempArr
        }))
      } else if (Math.random() <= this.state.enemyStrongAtkRate) {
        let value = getRandomInt(this.state.enemyStrongAtkMin, this.state.enemyStrongAtkMax + 1)
        let d = new Date()
        let localTime = d.toLocaleTimeString('en-GB')
        let actionLog =
          `[${localTime}] `
          + `${this.state.enemyName} `
          + `used power attack on ${this.props.location.state.fullName}. `
          + `Dealt ${value} dmg.`
        let tempArr = [...this.state.battleLogs]
        tempArr.push(actionLog)

        this.setState(prev => ({
          playerHP: prev.playerHP - value,
          battleLogs: tempArr
        }))
      }
      // else just idle
    }
  }


  // Functions for handling button clicks.

  handleAttack(e) {
    let value = getRandomInt(this.state.attackMin, this.state.attackMax + 1)
    let d = new Date()
    let localTime = d.toLocaleTimeString('en-GB')
    let actionLog =
      `[${localTime}] `
      + `${this.props.location.state.fullName} `
      + `used attack on ${this.state.enemyName}. `
      + `Dealt ${value} dmg.`

    let tempArr = [...this.state.battleLogs]
    tempArr.push(actionLog)

    this.setState(prev => ({
      enemyHP: prev.enemyHP - value,
      attackOnCD: true,
      attackCurrCD: this.state.attackCD,
      battleLogs: tempArr
    }))

    this.attackTimer = setInterval(() => {
      this.attackTimerTick()
    }, 1000)
  }

  handlePower(e) {
    let value = getRandomInt(this.state.powerMin, this.state.powerMax + 1)
    let d = new Date()
    let localTime = d.toLocaleTimeString('en-GB')
    let actionLog =
      `[${localTime}] `
      + `${this.props.location.state.fullName} `
      + `used power attack on ${this.state.enemyName}. `
      + `Dealt ${value} dmg.`

    let tempArr = [...this.state.battleLogs]
    tempArr.push(actionLog)

    this.setState(prev => ({
      enemyHP: prev.enemyHP - value,
      powerOnCD: true,
      powerCurrCD: this.state.powerCD,
      battleLogs: tempArr
    }))

    this.powerTimer = setInterval(() => {
      this.powerTimerTick()
    }, 1000)
  }

  handleHeal(e) {
    let value = getRandomInt(this.state.healMin, this.state.healMax + 1)
    let d = new Date()
    let localTime = d.toLocaleTimeString('en-GB')
    let actionLog =
      `[${localTime}] `
      + `${this.props.location.state.fullName} `
      + `used heal. `
      + `Recovered ${value} HP.`

    let tempArr = [...this.state.battleLogs]
    tempArr.push(actionLog)

    this.setState(prev => ({
      playerHP: prev.playerHP + value,
      healOnCD: true,
      healCurrCD: this.state.healCD,
      battleLogs: tempArr
    }))

    this.healTimer = setInterval(() => {
      this.healTimerTick()
    }, 1000)
  }

  handleGiveUp(e) {
    alert('You have surrendered.')
    this.endBattle()
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

        <div className='battle-page-names-container'>
          <div className='player-name'>
            {this.props.location.state.fullName}
          </div>
          <div className='enemy-name'>
            Covid Monster
          </div>

        </div>

        {(this.state.enemyHP > 0) ?
          <div style={{ flex: 1 }}>image here</div>
          :
          <div style={{ flex: 1 }} />
        }

        <div className='battle-ui-container'>
          <ActionList
            battleStart={this.state.battleStart}
            startBattle={this.startBattle}

            handleSettingsBtn={this.handleSettingsBtn}

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
          <BattleLog
            battleLogs={this.state.battleLogs}
          />
        </div>
      </div >
    )
  }
}

export default BattlePage
