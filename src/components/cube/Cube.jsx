import React from 'react'
import { useEffect, useState } from 'react'
import './Cube.css'

export default function Cube(props) {
  const { id, number, answer, setCounter } = props
  const [item, setItem] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handlechange = (event) => {
    setItem(event.target.value)
  }


  useEffect(()=>{
    if(item.toUpperCase()===answer.toUpperCase()){
      setDisabled(true)
    }
  }, [item, answer])

  useEffect(() => {


    if (item.toUpperCase() === answer.toUpperCase()) {
      console.log("dis")
      setDisabled(true)
      setCounter((counter) => counter + 1)
    }
  },[item,answer])

  return (
    <div id={id} className="cell">
      <input
        onChange={(event) => handlechange(event)}
        disabled={disabled}
        type={'text'}
        maxLength={1}
        className="cell_input"
      />
      <span className="number">{number}</span>
    </div>
  )
}
