// <<<<<<< HEAD
// import React from 'react'
// import './Cube.css'

// export default function Cube(props) {
//   const { id, number, value, disabled } = props
//   return (
//     <div id={id} className="cell">
//       <input
//         disabled={disabled}
//         type={'text'}
//         maxLength={1}
//         value={value}
//         className="cell_input"
//       />
//       <span className="number">{number}</span>
//     </div>
//   )
// }
// =======
import React from "react";
import './Cube.css'


export default function Cube(props){
    const {id,number} = props
    return(
        <div id={id} className="cell">
        <input type={'text'} maxLength={1} className="cell_input"/>
        <span className="number">{number}</span>
       </div>
    )
}
// >>>>>>> 7ceb09b108f4c08a36ecf240f1154fc9cd37e454
