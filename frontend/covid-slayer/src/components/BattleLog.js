import React from 'react'
import Button from 'react-bootstrap/Button'

class BattleLog extends React.Component {
  render() {
    return (
      <div className='battle-log-box'>
        <h4 style={{ textAlign: 'center' }}>Battle Log</h4>
        {/*insert logs here followed by a line break.*/}
      </div>
    )
  }
}

let btnStyles = {
  width: '50%',
  height: '50%',
  margin: '0px',
  border: '1px solid rgba(16, 36, 36, 0.2)',
  fontWeight: 'bold',
  fontSize: 'calc(12px + 1.3vw)'
}

export default BattleLog