import React, { useState, useEffect } from 'react';

import { UpdateName, NewTrip } from './db_func_planner';


const DestinationNameChange = ({setTripNames, tripNames, setSelectedValue})=>(event)=>{
    
    const newValue = event.target.value
    const oldValue = document.getElementById('planselect').value
    
    const itemData = tripNames.find(obj=>obj.tripname === oldValue) //Finds the Unique ID of the Object
   

    setTripNames((prevTripNames) => {
        return prevTripNames.map((tripData) => {
          if (tripData.id === itemData.id) {
            // Update desired property here (replace 'propertyToUpdate' with the actual property)
            return { ...tripData, tripname: newValue /* new value */ };
          }
          return tripData; // Return unchanged tripData
        });
    });

    setSelectedValue(newValue)

    UpdateName({oldname:oldValue, newname:newValue})
}

const AddNewTrip=({setLoading})=>{
  


  const addnew = ({})=>{
    //const newTrip = document.getElementById('newTripInput').value;
    console.log("hit")
    //NewTrip({newname:newTrip})
    //setLoading(true)
  

  }


  return(
    <div id="addContainer">
      <label htmlFor="newTrip" id='newTripLabel'>Enter Name of New Trip</label>
      <input type="text" className="form-control" placeholder="New Trip" id="newTripInput" onBlur={addnew({})}/>
    </div>
  )

}

export {DestinationNameChange, AddNewTrip}; 