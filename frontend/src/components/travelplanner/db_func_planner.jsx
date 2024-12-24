import React, { useState, useEffect } from 'react';
import axios from "axios";



const FetchTrips = async({setTripNames, setLoading})=>{
    try{
        const response = await axios.get('/api/travelnames')
        //console.log("Date from API: ", response.data);
        setTripNames(response.data)
        //console.log("State set in useEffect: ", response.data);
    }catch(err){
        console.log(err)
    }finally{
        setLoading(false)
    }
};

const UpdateName = async({oldname, newname})=>{
    try{
        const response = await axios.put('/api/updatetripname', {
            oldname: oldname,
            newname: newname,
          })
        console.log("Data Sent From Local")
    }catch(err){
        console.log(err)
    }
    
};

const NewTrip = async({newname})=>{
    try{
        const response = await axios.put('/api/newtrip', {
            newname: newname
          })
        console.log("Data Sent From Local")
    }catch(err){
        console.log(err)
    }
    
};

const DeleteTrip = async({itemName})=>{
    try{
        const response = await axios.put('/api/deletetrip', {
            itemName: itemName
          })
        console.log("Data Sent From Local")
    }catch(err){
        console.log(err)
    }
    
};

const FetchData = async({setData})=>{
    try{
        const response = await axios.get('/api/gettripdata')
        setData(response.data)
    }catch(err){
        console.log(err)
    }
   
}
export {FetchTrips, UpdateName, NewTrip, DeleteTrip, FetchData};