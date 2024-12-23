import React, { useState, useEffect } from 'react';
import "./modal.css"
import jsonData from './modal.json'; // Import JSON directly

//TODO: Need to make it so if you click outside the modal it will close

const Greeting = ({ show, onClose })=>{
    
    const message = dateDraw({data:jsonData});

    
    //console.log(message)


    if (!show) {
        return null; // Very important: Don't render if show is false
    }


    return (
        <div id="greeting">
            <div id="modal-box">
                <div id='row1modal'>
                    <span className="close-button" onClick={onClose}>&times;</span> {/* Close button */}
                    <h1 className='headermodal'>To My Beautiful Fa,</h1>
                </div>
                <div id='row2modal'>
                    <p className='h2header'>{message}</p>
                    <h2 className='headermodal sig'>Your One and Only,</h2>
                    <h2 className='headermodal sig'>Mark Wade Jr.</h2>
                </div>
            </div>
        </div>
    )
}


const dateDraw = ({data})=>{
    const today = todayDate({})
    //const today = "12/23/25"//Testing Different Dates
    var message = "Nothing to Report (This may be Error Cause I love you SO much and Would not forget this)"

    if (!data || data.length === 0) {
        return { message: "No data available.", today: todayDate };
    }

    for(let i=0; i<data.length;i++){
        if(today === data[i].date){
            return message = data[i].message
        }
    }
    return  message
}


const todayDate = ({})=>{
    const date = new Date()
    // Options object for formatting (adjust as needed)
    const options = {
        year: '2-digit',    // 'numeric', '2-digit'
        month: '2-digit',     // 'numeric', '2-digit', 'long', 'short', 'narrow'
        day: '2-digit'      // 'numeric', '2-digit'
    };

    const today = date.toLocaleDateString('en-US',options)

    return today
}
export default Greeting;