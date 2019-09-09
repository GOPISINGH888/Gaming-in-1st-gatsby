import React from "react"
const Propfooter = props => (
  <div className="column">
    <p>{props.txt}</p>
    <img src={props.img} />
    <h4>{props.text}</h4>
    <p>{props.lasttxt}</p>
  </div>
)
export default Propfooter
