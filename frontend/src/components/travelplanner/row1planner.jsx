import React, { useState, useEffect, useContext } from 'react';
import { AddNewTrip } from './change_events_planner';
import { StatesContext } from './travelplanner';
import { DeleteTrip } from './db_func_planner';
import { FetchTrips } from './db_func_planner';

const Row1planner = () =>{

    const {selectedValue, setSelectedValue, tripNames, toggleVis, setTogglevis,addvis, setAddvis, setLoading, setTripNames} = useContext(StatesContext);

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

    const deleteTrip = async ()=>{
        setLoading(true)   
        await DeleteTrip({itemName:selectedValue})
        // Fetch updated trip names after deletion
        await FetchTrips({ setTripNames, setLoading }); // Re-fetch trips
        setSelectedValue('Select A Trip');
        setTogglevis(false)
        setAddvis(false)
    }

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
                {toggleVis && 
                    <button type="button" className="btn btn-primary" id="deletebutton" onClick={deleteTrip} >Delete Trip</button>
                }
            </div>
           
            {addvis && <AddNewTrip />} {/* Render AddNewTrip conditionally */}

        </div>
    )
}


export default Row1planner