import { Fragment } from 'react'
import '../Button/Button.css'

const Button = (props) => {
  const {setIsStart}=props;
  return (
    <Fragment>
      <button onClick={()=>{setIsStart("results")}} className="button">FINISH GAME</button>
    </Fragment>
  )
}

export default Button
