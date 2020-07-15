import React from 'react'

class HealthBar extends React.Component {
  render() {
    return (
      <div className='healthbar'>
        {this.props.healthValue}%
      </div>
    )
  }
}

export default HealthBar