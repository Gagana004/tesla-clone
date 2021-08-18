import React from "react"
import './Buttons.css'

// const Buttons = ({imp, text, link}) => {
const Buttons = (props) => {
    return(
        <div className={`button ${props.imp === 'secondary' ? 'button__white' : ''}`}>
            <a href={props.link}>
              <p>{props.text}</p>  
            </a>
        </div>
    )
}

export default Buttons