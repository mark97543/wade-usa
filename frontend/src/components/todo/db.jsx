import React, { useState, useEffect, setLoading } from "react";
import axios from "axios";

// Separate function for fetching todos
const fetchTodos = async (setTodos, setLoading, setError) => {
    setLoading(true); // Set loading state before the request
    try {
        const response = await axios.get('/api/todos');
        //console.log("Response from API:", response.data)
        setTodos(response.data);
    } catch (error) {
        console.error('Error fetching todos:', error);
        setError(error);
    } finally {
        setLoading(false); // Set loading state after the request
    }

    
};

export {fetchTodos}