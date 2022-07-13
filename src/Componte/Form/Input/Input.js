import React from "react";

import './Input.css'

const Input = ({ type,placeholder,change }) => {
    return(
        <input type={type} placeholder={placeholder} onChange={change} className='input'/>
    )
}

export default Input