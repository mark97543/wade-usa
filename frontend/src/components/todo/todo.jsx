import React, { useState, useEffect } from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import ToDoListItems from './display.jsx';
import './todo.css';
import axios from "axios";

function ToDo() {
    const [todos, setTodos] = useState([]); // Initialize to []
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newItemText, setNewItemText] = useState(''); // New state for input value

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get('/api/todos');
                console.log("Data from API:", response.data);
                setTodos(response.data);
                console.log("State set in useEffect:", response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchTodos();
    }, []);

    const toggleTodo = async ({ id, completed }) => {
        try {
            const response = await axios.put(`/api/todos/${id}`, { completed });
            console.log("Response from PUT:", response.data);
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === response.data.id ? response.data : todo // Compare IDs correctly
                )
            );
        } catch (error) {
            console.error("Error toggling todo:", error);
            setError(error);
        }
    };
    const deleteTodo = async (id) => {
        try {
          const response = await axios.delete(`/api/todos/${id}`);
          setTodos(prevTodos => prevTodos.filter(todo => todo.id !== response.data.id));
        } catch (error) {
          console.error("Error deleting todo:", error);
          setError(error);
        }
      };
    const addTodo = async () => { // Modified addTodo function
        try {
            const response = await axios.post('/api/todos', { item: newItemText });
            setTodos(prevTodos => [...prevTodos, response.data]);
            setNewItemText(''); // Clear the input field after adding
        } catch (error) {
            console.error('Error adding todo:', error);
            setError(error);
        }
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    return (
        <div>
            <Header />
            <div className="todo-hero">
                <div className="lbox">Tasks Done</div>
                <div className="rbox">{heroMath({todos:todos})}/{todos.length}</div>
            </div>
            <div className="entrybox">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter New Item"
                    id="addItem"
                    value={newItemText} // Connect input value to state
                    onChange={(e) => setNewItemText(e.target.value)} // Update state on change
                />
                <button className="addButton btn btn-success" type="button" onClick={() => addTodo(document.getElementById("addItem").value)}>+</button>
            </div>

            <ToDoListItems todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

            <Footer />
        </div>
    );
}

const heroMath = ({todos})=>{
    
    const total = todos.length;
    var count = 0;
    
    for(let i = 0 ; i<total; i++){
        if(todos[i].completed ===true){
            count++
        }
    }
    return count
}

export default ToDo;