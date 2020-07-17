import React from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

class ActionList extends React.Component {
  render() {
    return (
      <div className='action-box'>
        <Button
          style={btnStyles}
          onClick={this.props.handleAttack}
          disabled={this.props.attackOnCD}
        >
          Attack{' '}
          <Badge variant='info' pill>{this.props.attackCurrCD}</Badge>
        </Button>

        <Button
          style={btnStyles}
          onClick={this.props.handlePower}
          disabled={this.props.powerOnCD}
        >
          Power Attack{' '}
          <Badge variant='info' pill>{this.props.powerCurrCD}</Badge>
        </Button>

        <Button
          style={btnStyles}
          onClick={this.props.handleHeal}
          disabled={this.props.healOnCD}
        >
          Heal{' '}
          <Badge variant='info' pill>{this.props.healCurrCD}</Badge>
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