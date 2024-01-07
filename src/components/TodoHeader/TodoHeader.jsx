import React from 'react';
import './TodoHeader.css';

const TodoHeader = ({ darkMode, onThemeToggle }) => {
  return (
    <div className="heading-themeIcon-container">
      <h1 className="todo-heading">TODO</h1>
      <button className="icon" onClick={onThemeToggle}>
        <img
          id="icon-image"
          src={darkMode ? "public/assets/icons/dark-mode.svg" : "/assets/icons/light-mode.svg"}
          alt="theme-mode"
        />
      </button>
    </div>
  );
};

export default TodoHeader;