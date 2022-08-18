import React from 'react'
import './Cube.css'

export default function Cube(props) {
  const { id, number, value, disabled } = props
  return (
    <div id={id} className="cell">
      <input
        disabled={disabled}
        type={'text'}
        maxLength={1}
        value={value}
        className="cell_input"
      />
      <span className="number">{number}</span>
    </div>
  )
}
