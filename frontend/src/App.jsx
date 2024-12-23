import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import  Home  from "./components/home/home";
import ToDo from './components/todo/todo';
import 'bootswatch/dist/darkly/bootstrap.min.css'; // Replace 'slate' with your desired theme 
import TravelPlanner from './components/travelplanner/travelplanner';





function App() {
  return (
    <Router> {/* Wrap with Router */}
      <div className="App">
        <Routes> {/* Use Routes */}
          <Route path="/" element={<Home />} /> {/* Define the route for the home page */}
          <Route path="/todo" element={<ToDo />} />
          <Route path='/travelplanner' element={<TravelPlanner/>} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;


