import React from 'react';
import './todo.css';
import axios from 'axios'; // Import axios

const ToDoListItems = ({todos, setTodos})=>{
    //console.log("Todos prop in ToDoListItems:", todos); // Check the prop here
    
    if (!todos || todos.length === 0) { // Check if todos is nullish or empty
        return <p>No tasks yet!</p>; // Or return null if you don't want to render anything
    }
    return (
        <div className='dataRender'>
          {todos.map((todo) => ( // Wrap the JSX in parentheses
            <li className='listItem' key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                <input
                        className='myCheckbox'
                        type="checkbox"
                        //checked={todo.completed} // Use todo.completed directly
                        onChange={(e) => {
                        toggleTodo({ id: todo.id, completed: e.target.checked, setTodos:setTodos });
                    }}
                />         
              <label className='dataLabel' htmlFor="myCheckbox">{todo.item}</label>
              <button className='deleteButton' onClick={() => deleteTodo(todo.id)}>✗</button>
            </li>
          ))}
        </div>
      );
};

const toggleTodo =async ({id, completed, setTodos})=>{
    //console.log("toggleTodo called with:", id, completed); // Check if it's called
    try {
        const response = await axios.put(`/api/todos/${id}`, { completed });
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === parseInt(id) ? response.data: todo // Update with returned data
            )
        );
    } catch (error) {
        console.error("Error toggling todo:", error);
        setError(error)
    }
}
export default ToDoListItems;