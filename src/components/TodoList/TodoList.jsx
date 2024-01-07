

import React from 'react';
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'
const TodoList = ({ todoList, darkMode , onToggle, onRemove }) => {
  return (
    <div className="todo-sub-container">
      {/* Empty View component */}
      {/* TodoList items */}
      <ul className="todo-list-container">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={() => onToggle(todo.id)} onRemove={() => onRemove(todo.id)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
