import React from "react";
import './StartGame.scss'

export default function StartGame(props){

    const {setIsStart} = props

  
    return(
     <div className="start-container">
        <button className="start-button" onClick={()=> setIsStart("start")}>Start Game</button>
     </div>
  )
}