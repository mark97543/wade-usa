import React, { useState, useEffect, useContext } from 'react';
import { AddNewTrip } from './change_events_planner';
import { StatesContext } from './travelplanner';


const Row1planner = () =>{

    const {selectedValue, setSelectedValue, tripNames, toggleVis, setTogglevis,addvis, setAddvis } = useContext(StatesContext);

    if(selectedValue==="'Select A Trip'"){
        setTogglevis(true)
        setAddvis(false)
    }

    const handleSelectChange = (event) => {

        const newValue = event.target.value;
        setSelectedValue(newValue);
        document.getElementById('selectatrip').hidden = true; // Okay for simple cases
    
        if (newValue === 'addnew') {
          setTogglevis(false);
          setAddvis(true)
        } else {
          setTogglevis(true);
          setAddvis(false)
        }
    };

    return(
        <div>
            <div id='row1travel'>
                <label htmlFor='plans' id='planselectlabel' className='form-label mt-4'>Travel Itinerary</label>
                <select  id='planselect' className='form-select' value={selectedValue} onChange={handleSelectChange}> 
                    {tripNames.map((names)=>(
                        <option value ={names.tripname} key={names.tripname}>{names.tripname}</option>
                    ))}
                    <option key="addnew" id="addanewtrip" value = 'addnew'> Add New</option>
                    <option key='selectatrip' id='selectatrip' value = 'Select A Trip'>Select A Trip</option>
                </select>
            </div>
           
            {addvis && <AddNewTrip />} {/* Render AddNewTrip conditionally */}

        </div>
    )
}


export default Row1planner