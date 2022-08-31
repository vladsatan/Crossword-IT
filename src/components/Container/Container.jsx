import React from 'react'
import './Container.scss'
import ScrabbleBody from '../ScrabbleBody'
import Sidebar from '../Sidebar/Sidebar'
import Button from '../Button/Button'
import StartGame from '../StartGame/StartGame'
import Finish from '../Results/Results'
import { useState } from 'react'

export default function Container(props) {
  const { timerResult, isStart, setIsStart } = props
  const [counter, setCounter] = useState(0)

  return (
    <div className="container">
      <div className="container-header">
        <div className="imit-menu">
          <div className="red"></div>
          <div className="yelloy"></div>
          <div className="green"></div>
        </div>
        <button className="zxc">?</button>
      </div>

      {isStart === 'start' && (
        <>
          <div className="container_body">
            <Sidebar />
            <ScrabbleBody setCounter={setCounter} />
          </div>
          <Button setIsStart={setIsStart} />
        </>
      )}
      {isStart === 'notstarted' && <StartGame setIsStart={setIsStart} />}
      {isStart === 'results' && (
        <Finish counterResult={counter} timerResult={timerResult} />
      )}
    </div>
    
  )
}
