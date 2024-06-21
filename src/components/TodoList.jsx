import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, modifyTodo }) => {
  return (
    <ul className="list-disc pl-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
