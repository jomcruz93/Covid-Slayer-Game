import React from 'react'
import Button from 'react-bootstrap/Button'

class ActionList extends React.Component {
  render() {
    return (
      <div className='action-box'>
        <Button style={btnStyles} onClick={this.props.handleAttack}>
          Attack
        </Button>
        <Button style={btnStyles} onClick={this.props.handlePower}>
          Power Attack
        </Button>
        <Button style={btnStyles} onClick={this.props.handleHeal}>
          Heal
        </Button>
        <Button style={btnStyles} onClick={this.props.handleGiveUp}>
          Surrender
        </Button>
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

export default ActionList