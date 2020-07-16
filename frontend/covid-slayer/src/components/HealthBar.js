import React from 'react'
import BattleTimer from './BattleTimer'

class HealthBar extends React.Component {
  render() {
    return (
      <div className='healthbar'>
        <div className='healthbar-player'>
          {this.props.playerHealth}%
        </div>
        <BattleTimer
          battleTime={this.props.battleTime}
          updateBattleTime={this.props.updateBattleTime}
        />
        <div className='healthbar-enemy'>
          {this.props.enemyHealth}%
        </div>
      </div>
    )
  }
}

export default HealthBar