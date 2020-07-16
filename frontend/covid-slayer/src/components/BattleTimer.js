import React from 'react'

class BattleTimer extends React.Component {

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.props.battleTime > 0) {
        this.props.updateBattleTime()
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = null
  }

  render() {
    return (
      <div className='battle-timer'>
        {this.props.battleTime}
      </div>
    )
  }
}

export default BattleTimer