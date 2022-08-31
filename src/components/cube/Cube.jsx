import React from 'react'
import { useEffect, useState } from 'react'
import './Cube.css'
import { useRef } from 'react'

export default function Cube(props) {
  const {
    id,
    number,
    answer,
    setCounter,
    enabledInput,
    setEnabledInput,
  } = props
  const [item, setItem] = useState('')
  const [disabled, setDisabled] = useState(false)
  const reference = useRef()
  const handlechange = (event) => {
    setItem(event.target.value)
  }

  useEffect(() => {
    const inputRef = reference.current
    const addEvent = inputRef.addEventListener('click', () => {
      if (enabledInput === true) {
        console.log(answer)
        setItem(answer)
        setEnabledInput(false)
        console.log(enabledInput)
      }
    })

    if (enabledInput === false) {
      setEnabledInput(false)
    }

    return () => {
      inputRef.removeEventListener('click', addEvent)
    }
  }, [answer, item, enabledInput, setEnabledInput])

  useEffect(() => {
    if (item.toUpperCase() === answer.toUpperCase()) {
      setDisabled(true)
      setCounter((counter) => counter + 1)
    }
  }, [item, answer, setCounter])

  return (
    <div id={id} className="cell">
      <input
        ref={reference}
        onChange={(event) => handlechange(event)}
        disabled={disabled}
        type={'text'}
        maxLength={1}
        className="cell_input"
        value={item}
      />
      <span className="number">{number}</span>
    </div>
  )
}
