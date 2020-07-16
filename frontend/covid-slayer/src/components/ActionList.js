import React from 'react'
import Button from 'react-bootstrap/Button'

class ActionList extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.handleClick}>
          Init HP
        </Button>
        <Button onClick={this.props.handleClick2}>
          Attack
        </Button>
        <Button onClick={this.props.handleClick3}>
          Power Attack
        </Button>
        <Button onClick={this.props.handleClick4}>
          Heal
        </Button>
        <Button onClick={this.props.handleClick5}>
          Surrender
        </Button>
      </div>
    )
  }
}

export default ActionList