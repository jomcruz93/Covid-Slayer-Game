import React from 'react'
import Button from 'react-bootstrap/Button'

class BattleLog extends React.Component {
  displayBattleLogs() {
    let arrSize = this.props.battleLogs.length
    let logToDisplay = this.props.battleLogs
      .reverse().map((item, idx) => {
        if (idx === 0) {
          return (
            <p style={{
              margin: '0px 0px 8px 0px',
              padding: '0px',
              fontSize: '15px',
              fontWeight: 'bold'
            }}
            >
              {item}
            </p>
          )
        }

        return (
          <p style={{
            margin: '0px 0px 8px 0px',
            padding: '0px',
            fontSize: '14px'
          }}
          >
            {item}
          </p>
        )
      })

    return logToDisplay.slice(0, 10)
  }

  render() {
    return (
      <div className='battle-log-box'>
        <h4 style={{ textAlign: 'center' }}>Battle Log</h4>
        {this.displayBattleLogs()}
      </div>
    )
  }
}

export default BattleLog