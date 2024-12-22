import React, {useState, useEffect} from "react";
import Header from "../header/header";
import Footer from "../footer/footer"
import {fetchTodos} from './db.jsx'
import ToDoListItems from './display.jsx'

import './todo.css'
import axios from "axios"; //npm i axios

function ToDo(){

    const [todos, setTodos] = useState(); // Initialize to null for loading state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTodos(setTodos, setLoading, setError);
    }, []); // Empty dependency array ensures this runs only once

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return(
        <div>
            < Header />

            <div className="todo-hero">
                <div className="lbox">Tasks Done</div>
                <div className="rbox">10/10</div> {/* TODO: Need to Update this*/} 
            </div>

            <div className="entrybox">
                <input type="text" className="form-control" placeholder="Enter New Item" id="addItem" />
                <button className="addButton btn btn-success" type="button">+</button>{/*TODO: Need to incorperat Add Button */}
            </div>

            <ToDoListItems todos={todos} setTodos={setTodos} /> {/* Correct prop passing */}
            
            <Footer />
        </div>

    )

}






export default ToDo;