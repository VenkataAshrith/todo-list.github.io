import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li>
      <span 
        onClick={() => toggleTodo(index)} 
        className={todo.completed ? 'completed' : ''}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
