import React from 'react';
import './TodoHeader.css';

const TodoHeader = ({ darkMode, onThemeToggle }) => {
  return (
    <div className="heading-themeIcon-container">
      <h1 className="todo-heading">TODO</h1>
      <button className="icon" onClick={onThemeToggle}>
        <img
          id="icon-image"
          // src={darkMode ? "/assets/icons/dark-mode.svg" : "/assets/icons/light-mode.svg"}
          src={darkMode ? "vscode-vfs://github%2B7b2276223a312c22726566223a7b2274797065223a352c226964223a2267682d7061676573227d7d/hakim2999/Todo-List/assets/icons/dark-mode.svg" : "/assets/icons/light-mode.svg"}

          alt="theme-mode"
        />
      </button>
    </div>
  );
};

export default TodoHeader;