import React from 'react';
import './IconSwitch.css'

function IconSwitch(props) {
  const { icon, onSwitch } = props
  return (
    <div className='icon'>
      <span onClick={onSwitch} className="material-icons md-36">{icon}</span>
    </div>
  )
}

export default IconSwitch
