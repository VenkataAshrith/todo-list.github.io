import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo={todo} 
          index={index} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
