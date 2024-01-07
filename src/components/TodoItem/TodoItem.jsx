
import React from 'react';
// import './TodoItem.css'

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="todo-item-div">
      <input type="checkbox" className="checkbox" checked={todo.isChecked} onChange={onToggle} />
      <li className={`todoItem ${todo.isChecked ? 'text-decoration' : ''}`}>{todo.todo}</li>
      <img src="assets/icons/close1.svg" className="removeIcon" alt="Remove" onClick={onRemove} />
    </div>
  );
};

export default TodoItem;



// const TodoItem = ({ todo, onToggle, onRemove,darkMode }) => {
//   return (
//     <div  className={`todo-item-div${darkMode ? '-lg' : ''}`}>
//       <input type="checkbox" className="checkbox" checked={todo.isChecked} onChange={onToggle} />
//       <li className={`todoItem ${todo.isChecked ? 'text-decoration' : ''}${darkMode ? '-lg' : ''}`}>{todo.todo}</li>
//       <img src="assets/icons/close1.svg" className={`removeIcon${darkMode ? '-lg' : ''}`} alt="Remove" onClick={onRemove} />
//     </div>
//   );
// };