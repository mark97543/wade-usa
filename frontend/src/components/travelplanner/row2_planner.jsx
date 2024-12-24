import {useState, useContext, useEffect } from 'react';
import React from 'react';
import {DestinationNameChange} from './change_events_planner';
import { StatesContext } from './travelplanner';

const Row2Planner = () =>{
    const {setTripNames,tripNames, setSelectedValue, selectedValue, data, setLoading}=useContext(StatesContext)
    const [endDate, setEndDate] = useState(''); // State for endDate
    const [endDateId, setEndDateId] = useState(null); // State to store end date ID

    function getTripData(tripname) {

        const data2 = data.rows;
        if (!data2 || !Array.isArray(data2)) {
            console.error("Data is not an array:", data2);
            return null;
        }
    
        const tripItems = data2.filter(item => item.tripname === tripname);
        if (tripItems.length === 0) {
            console.log(`No data found for tripname: ${tripname}`);
            return null; // Or return an empty object {} if you prefer
        }
        return tripItems
    }

    useEffect(() => {
        document.getElementById('destination').value=selectedValue;
    })

    useEffect(() => {
        if (selectedValue) {
            const tripData = getTripData(selectedValue);
            if (tripData) {
                const endDateItem = tripData.find(item => item.attribute === 'enddate');
                setEndDate(endDateItem ? endDateItem.detail : '');
                setEndDateId(endDateItem ? endDateItem.id : null); // Set end date ID if found
            } else {
                setEndDate('');
                setEndDateId(null); // Clear end date ID if no trip data
            }
        } else {
            setEndDate('');
            setEndDateId(null); // Clear end date ID if no selected value
        }
    }, [selectedValue, data]);
 
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
        // Find the trip and update the end date in the data
        const newData = {data};
        if (newData.rows) {
            newData.rows = newData.rows.map(item => {
                if (item.tripname === selectedValue && item.attribute === 'enddate') {
                    return { ...item, detail: event.target.value };
                }
                return item;
            });
            setEndDate(newData);
        }
    };
  
    const sendNewEndDate = (event)=>{
        console.log(endDate)
        console.log(endDateId)

        //Need to Send the data to the DB (If we could do ID we will have less DB functions.)
    }

    return(
        <div id='row2travel'>
            <div id='row2box1'>
                <label htmlFor="destination" id='destinationLabel'>Destination</label>
                <input type="text" className="form-control" placeholder="Default input" id="destination" onBlur={DestinationNameChange({setTripNames:setTripNames, tripNames:tripNames, setSelectedValue:setSelectedValue, setLoading:setLoading})}/>
            </div>
            <div id='row2box2'>
                <label htmlFor="startDate" id='startDateLabel'>Start Date</label>
                <input type="text" className="form-control" placeholder="Default input" id="startDate" />
            </div>
            <div id='row2box3'>
                <label htmlFor="endDate" id='endDateLabel'>End Date</label>
                <input type="text" className="form-control" placeholder="Default input" id="endDate" value={endDate} onChange={handleEndDateChange} onBlur={sendNewEndDate}/>
            </div>
        </div>

    )

}

export default Row2Planner;