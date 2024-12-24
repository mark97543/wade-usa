import { useContext } from 'react';
import React from 'react';
import {DestinationNameChange} from './change_events_planner';
import { StatesContext } from './travelplanner';

const Row2Planner = () =>{
    const {setTripNames,tripNames, setSelectedValue, isVisible}=useContext(StatesContext)
    return(
        <div>
            {!isVisible && (<div id='row2travel'>
                <div id='row2box1'>
                    <label htmlFor="destination" id='destinationLabel'>Destination</label>
                    <input type="text" className="form-control" placeholder="Default input" id="destination" onBlur={DestinationNameChange({setTripNames:setTripNames, tripNames:tripNames, setSelectedValue:setSelectedValue})}/>
                </div>
                <div id='row2box2'>
                    <label htmlFor="startDate" id='startDateLabel'>Start Date</label>
                    <input type="text" className="form-control" placeholder="Default input" id="startDate" />
                </div>
                <div id='row2box3'>
                    <label htmlFor="endDate" id='endDateLabel'>End Date</label>
                    <input type="text" className="form-control" placeholder="Default input" id="endDate" />
                </div>
            </div>
            )}
        </div>
    )

}

export default Row2Planner;