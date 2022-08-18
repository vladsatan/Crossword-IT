import React from "react";
import './Cube.css'


export default function Cube(props){
    const {id,number} = props
    return(
        <div id={id} className="cell">
        <input type={'text'} className="cell_input"/>
        <span className="number">{number}</span>
       </div>
    )
}