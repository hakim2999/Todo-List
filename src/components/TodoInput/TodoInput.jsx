
import React from 'react';
import './TodoInput.css';

const TodoInput = ({ inputValue, onInputChange, onKeyPress, onAddTodo }) => {
  return (
    <div className="input-container">
      <div className="input-sub-container">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="input"
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onKeyPress}
        />
        <button onClick={onAddTodo} className="add-todo-button">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
