import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import  Home  from "./components/home/home";


function App() {
  return (
    <Router> {/* Wrap with Router */}
      <div className="App">
        <Routes> {/* Use Routes */}
          <Route path="/" element={<Home />} /> {/* Define the route for the home page */}
        </Routes>
      </div>
    </Router>
  );
}




export default App;


