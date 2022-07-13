import React from "react";

import './Button.css'

const Button = ({ children,click }) => {
    return (
        <button type="sumbit" className="button" onClick={click}>
            {children}
        </button>
    )
}

export default Button