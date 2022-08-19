import React from 'react'
import './Container.css'
import ScrabbleBody from '../ScrabbleBody'
import Sidebar from '../Sidebar/Sidebar'
import Button from '../Button/Button'
import StartGame from '../StartGame/StartGame'
import { useState } from 'react'

export default function Container() {

   const [isStart, setIsStart] = useState(false)

  return (
    <div className="container">
      <div className="container-header">
        <div className="imit-menu">
          <div className="red"></div>
          <div className="yelloy"></div>
          <div className="green"></div>
        </div>
      </div>


      {isStart? 
      <>
      <div className="container_body">
        <Sidebar />
        <ScrabbleBody />
      </div>
      <Button /> 
      </>
      :
      <StartGame setIsStart={setIsStart} />
      }
      
      




</div>
    
  )
}
