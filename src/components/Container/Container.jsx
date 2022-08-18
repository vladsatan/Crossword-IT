import React from 'react'
import './Container.css'
import ScrabbleBody from '../ScrabbleBody'
import Sidebar from '../Sidebar'

export default function Container() {
  return (
    <div className="container">
      <div className="container-header">
        <div className="imit-menu">
          <div className="red"></div>
          <div className="yelloy"></div>
          <div className="green"></div>
        </div>
      </div>
      <div className='container_body'>
        <Sidebar/>
        <ScrabbleBody />
      </div>
    </div>
  )
}
