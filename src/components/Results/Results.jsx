import React from "react"
import "./Result.scss"
import winLogo from './winLogo.png'
import Statistics from "../Statistics/Statistics"

export default function Finish(props){
    const{timerResult}=props
    return(
        <div className="result_container">
            <img src={winLogo} alt="WIN" width={'100px'} />
            <h1>Victory</h1>
            <p>{timerResult}</p>
            <Statistics hints={3} points={35} words={8} />
             
            <button className="continueBTN">Сontinue</button>
        </div>
    )
}

