import React, { useState, useEffect, createContext } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import './travelplanner.css'
import axios from "axios"; //Comment this out in production
import Row1Planner from './row1planner';
import { FetchTrips, FetchData } from './db_func_planner';
import Row2Planner from './row2_planner'; //Destination, StartDate and End Date

export const StatesContext = createContext(null);

const TravelPlanner = ({})=>{
    const [tripNames, setTripNames] = useState([]) //Loads Unique trip names
    const [loading, setLoading] = useState(true); //Refetches data
    const [selectedValue, setSelectedValue]=useState("Select A Trip") //Toggles Trip Selector
    const[toggleVis, setTogglevis]=useState(false) //Toggles Visibility for adding neww item
    const [addvis, setAddvis]=useState(false) ///visibility of add new iten
    const [data, setData]=useState([]) //All Data For Trips

    useEffect(()=>{
        FetchTrips({setTripNames:setTripNames, setLoading:setLoading});
        FetchData({setData:setData})
    }, [])

    
    return(
    <div>
        <Header />
        
        <StatesContext.Provider value ={{loading, setLoading, setTripNames, tripNames, selectedValue, setSelectedValue, toggleVis, setTogglevis, addvis, setAddvis, data}}>
            <Row1Planner/>
            {toggleVis && 
                <div id='tablecontainer'>
                    <div id='planneronload'>
                        < Row2Planner />
                    </div>
                </div>
            }
            {/* Deet To add Delete Trip button here (with warning Modal)*/}
        </StatesContext.Provider>
        <Footer />
    </div>


    )
}



export default TravelPlanner;