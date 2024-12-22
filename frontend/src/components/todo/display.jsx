import React from 'react';

const ToDoListItems = ({ todos, toggleTodo, deleteTodo }) => {
    if (!todos) {
        return <div>Loading...</div>;
    }

    if (todos.length === 0) {
        return <p>No tasks yet!</p>;
    }

    return (
        <div className='dataRender'>
            {todos.map((todo) => (
                <li className='listItem' key={todo.id}> {/* No style here */}
                 <div className="item-container">
                    <input
                        className='myCheckbox'
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(e) => toggleTodo({ id: todo.id, completed: e.target.checked })}
                    />
                </div>
                    <span className={`itemText ${todo.completed ? 'completed' : ''}`}> {/* Span for text */}
                        {todo.item}
                    </span>
                    <button className='deleteButton' onClick={() => deleteTodo(todo.id)}>✗</button>
                </li>
            ))}
        </div>
    );
};

export default ToDoListItems;