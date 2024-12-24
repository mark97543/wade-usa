import React, { useState, useEffect, useContext } from 'react';
import { UpdateName, NewTrip } from './db_func_planner';
import { StatesContext } from './travelplanner';
import { FetchTrips } from './db_func_planner';

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

const AddNewTrip=()=>{
  
  const {setLoading,setTripNames, setSelectedValue, setTogglevis, toggleVis}=useContext(StatesContext)

  const handleBlur = (event)=>{
    const newTrip = document.getElementById('newTripInput').value;
    NewTrip({newname:newTrip})
    setLoading(true)
    FetchTrips({setTripNames:setTripNames, setLoading:setLoading})
    setSelectedValue(newTrip)
    setTogglevis(false)
    //changevis(toggleVis)

  }

  return(
    <div id="addContainer">
      <label htmlFor="newTrip" id='newTripLabel'>Enter Name of New Trip</label>
      <input type="text" className="form-control" placeholder="New Trip" id="newTripInput" onBlur={handleBlur}/>
    </div>
  )

}

// const changevis = (toggleVis)=>{

//   document.getElementById('planneronload').hidden = toggleVis;
//   document.getElementById('tablecontainer').hidden = toggleVis;
//   document.getElementById('addContainer').hidden = !toggleVis;
  
// }

export {DestinationNameChange, AddNewTrip}; 