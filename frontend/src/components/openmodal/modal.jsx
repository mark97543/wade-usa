import React, { useState, useEffect } from 'react';
import "./modal.css"


const Greeting = ({ show, onClose })=>{

    if (!show) {
        return null; // Very important: Don't render if show is false
    }


    return (
        <div id="greeting">
 
            <p>Basic Modal</p>
        </div>
    )
}

export default Greeting;