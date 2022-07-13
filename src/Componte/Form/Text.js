import React from "react";

import './Text.css'

const Text = ({ children }) => {
    return(
        <div className="text">
            <h2>
                {children}
            </h2>
        </div>
    )
}

export default Text