import React from 'react'
import './Container.css'
import ScrabbleBody from '../ScrabbleBody'
import { useState } from 'react'

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
      <form className="container_body">
        <div>Menu is here</div>
        <ScrabbleBody />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
