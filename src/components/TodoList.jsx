import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo, modifyTodo }) {
  return (
    <ul className="mt-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
