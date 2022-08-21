import React, { useEffect, useState } from 'react'
import './Header.scss'
import { useCallback } from 'react'

export default function Header(props) {
  const { getTimerResult, isStart, setVersion, version } = props
  const [date, setDate] = useState(0)
  const [seconds, setSeconds] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [hours, setHours] = useState("00")

  const secondCounter = useCallback(() => {
    setDate((date) => date + 1000)
    if (Number(seconds) === 59) {
      setSeconds('00')
    } else {
      let changeSeconds =
        date / 1000 - Number(hours) * 60 * 60 - Number(minutes) * 60

      if (Math.floor(changeSeconds).toString().length === 1) {
        setSeconds('0' + Math.floor(changeSeconds).toString())
      } else {
        setSeconds(Math.floor(changeSeconds).toString())
      }
    }

    if (Number(minutes) === 59) {
      setMinutes('00')
    } else {
      let changeMinutes = date / 1000 / 60 - Number(hours) * 60
      if (Math.floor(changeMinutes).toString().length === 1) {
        setMinutes('0' + Math.floor(changeMinutes).toString())
      } else {
        setMinutes(Math.floor(changeMinutes).toString())
      }
    }

    if (Number(hours) === 59) {
      setHours('00')
    } else {
      let changeHours = date / 1000 / 60 / 60
      if (Math.floor(changeHours).toString().length === 1) {
        setHours('0' + Math.floor(changeHours).toString())
      } else {
        setHours(Math.floor(changeHours).toString())
      }
    }
    getTimerResult(`0${hours}:0${minutes}:0${seconds}`)
  }, [date, hours, minutes, seconds,getTimerResult])

  useEffect(() => {
    if (isStart === 'start') {
      setTimeout(() => {
        secondCounter()
      }, 1000)
    } else {
      clearTimeout(setDate)
      setMinutes("00")
      setSeconds("00")
      setHours("00")
    }
  }, [isStart, secondCounter, hours, minutes, seconds])

  return (
    <header>
      <div className="header">
        <p>
          {hours}:{minutes}:{seconds}
        </p>
        <h1>Star-Wars Scrabble</h1>
        <div className="switch">
          <input
            onChange={() => setVersion(version === 'light' ? 'dark' : 'light')}
            type={'checkbox'}
          />
        </div>
      </div>
    </header>
  )
}
