import React from "react";
import "./Statistics.scss"

export default function Statistics(props){

    const {hints,points,words} = props

    return(
        <div className="result_block">
                
        <h2>Statistics</h2> 
        <div className="result_box">hints used: {hints}</div>
        <div className="result_box">points earned: {points}</div>
        <div className="result_box">words guessed: {words}</div>
      </div>
    )
}


// Сюда будут передаваться 3 пропса (количество взятых подсказок, количество заработанных очков, сколько слов отгаданно)