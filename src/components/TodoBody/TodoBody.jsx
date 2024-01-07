
import React from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import './TodoBody.css';


const TodoBody = ({ inputValue, onInputChange, onKeyPress, onAddTodo, todoList, onToggle, onRemove ,darkMode}) => {
  return (
    // <div id="todo-container" className="todo-container">
    <div id="todo-container" className={`todo-container${darkMode ? '-dark' : ''}`}>
      <TodoInput
        inputValue={inputValue}
        onInputChange={onInputChange}
        onKeyPress={onKeyPress}
        onAddTodo={onAddTodo}
        darkMode={darkMode}
      />
      {/* TodoList component */}
      {/* Check if the todoList is empty */}
      {todoList.length === 0 ? (
        // Render the empty state view
        <div className="empty-container">
          <img
            alt="cactus"
            className="cactus"
            src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1703594360/cute_cactus-cuate_aavpkk.svg"
          />
          <h1 id="empty-line" className="empty-line">
            There are no todos....
          </h1>
        </div>
      ) : (
        // Render the TodoList component
        <TodoList darkMode={darkMode} todoList={todoList} onToggle={onToggle} onRemove={onRemove}  />
      )}
    </div>
  );
};

export default TodoBody;
