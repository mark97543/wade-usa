import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import  Home  from "./components/home/home";
import Greeting from './components/openmodel/model.jsx';



function App() {
  return (
    <Router> {/* Wrap with Router */}
      <div className="App">
        <Routes> {/* Use Routes */}
          <Route path="/" element={<Home />} /> {/* Define the route for the home page */}
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;


