import React, { useState, useEffect } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import './travelplanner.css'
import axios from "axios"; //Comment this out in production
import Row1Planner from './row1planner';
import { FetchTrips } from './db_func_planner';
import Row2Planner from './row2_planner'; //Destination, StartDate and End Date



const TravelPlanner = ({})=>{
    const [tripNames, setTripNames] = useState([])
    const [loading, setLoading] = useState(true);
    const [selectedValue, setSelectedValue]=useState("Select A Trip")


    useEffect(()=>{
        FetchTrips({setTripNames:setTripNames, setLoading:setLoading});
    }, [])

    //console.log(tripNames)
    return(
    <div>
        <Header />
        
        <Row1Planner selectedValue={selectedValue} setSelectedValue={setSelectedValue} tripNames={tripNames} setLoading={setLoading}/>
        
        <div id='tablecontainer' hidden={true}>
            <div id='planneronload' hidden={true}>
                < Row2Planner setTripNames={setTripNames} tripNames={tripNames} setSelectedValue={setSelectedValue} />
            </div>
        </div>
        {/* Deet To add Delete Trip button here (with warning Modal)*/}

        
        <Footer />
    </div>


    )
}



export default TravelPlanner;