import React, { useState, useEffect } from 'react';
import { AddNewTrip } from './change_events_planner';


const Row1planner = ({selectedValue,setSelectedValue, tripNames}) =>{

    const[addingNew, setAddingNew]=useState(false)

    


    
    return(
        <div>
            <div id='row1travel'>
                <label htmlFor='plans' id='planselectlabel' className='form-label mt-4'>Travel Itinerary</label>
                <select  id='planselect' className='form-select' value={selectedValue} onChange={handleSelectChange(setSelectedValue, setAddingNew, addingNew)}> 
                    {tripNames.map((names)=>(
                        <option value ={names.tripname} key={names.tripname}>{names.tripname}</option>
                    ))}
                    <option key="addnew" id="addanewtrip" value = 'addnew'> Add New</option>
                    <option key='selectatrip' id='selectatrip' value = 'Select A Trip'>Select A Trip</option>
                </select>
            </div>
           
            {addingNew && <AddNewTrip/>} {/* Render AddNewTrip conditionally */}

        </div>
    )
}


const handleSelectChange = (setSelectedValue, setAddingNew) => (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    document.getElementById('selectatrip').hidden = true; // Okay for simple cases

    if (newValue === 'addnew') {
      setAddingNew(true);
      document.getElementById('tablecontainer').hidden = true; // Okay for simple cases (consider using state later)
    } else {
      setAddingNew(false);
      document.getElementById('planneronload').hidden = false;
      document.getElementById('tablecontainer').hidden = false;
      document.getElementById('destination').value = newValue;
    }
  };

export default Row1planner