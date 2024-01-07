

import React, { useState, useEffect } from 'react';
import TodoHeader from '../TodoHeader/TodoHeader';
import TodoBody from '../TodoBody/TodoBody';
import TodoFooter from '../TodoFooter/TodoFooter';
import './TodoApp.css';

const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    loadTodosFromStorage();
  }, []);


  const loadTodosFromStorage = () => {
    const localTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
    setTodoList(localTodoList);
  };

  


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodoItem = {
        id: counter,
        todo: inputValue,
        isChecked: false,
      };

      setTodoList([...todoList, newTodoItem]);
      setCounter(counter + 1);
      setInputValue('');

      // Save to local storage
      localStorage.setItem('todoList', JSON.stringify([...todoList, newTodoItem]));
    }
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);

    // Save to local storage
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  const toggleTodo = (id) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    setTodoList(updatedTodoList);

    // Save to local storage
    localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);
  const handleThemeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
     // Save to local storage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <div id="todo-app-main-container" className={`todo-app-main-container${darkMode ? '-dark' : ''}`}>

        <div className="todo-app-sub-container">
              {/* TodoHeader component */}
              <TodoHeader darkMode={darkMode} onThemeToggle={handleThemeToggle} />
              {/* TodoBody component */}
              <TodoBody
              darkMode={darkMode}
                inputValue={inputValue}
                onInputChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                onAddTodo={addTodo}
                todoList={todoList}
                onToggle={toggleTodo}
                onRemove={removeTodo}
              />
        </div>
              {/* TodoFooter component */}
               <TodoFooter />
    </div>
  );
};

export default TodoApp;
