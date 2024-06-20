import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((res) => res.json())
      .then((date) => setTodos(date))
      .catch((err) => {
        console.error('Error occured on fetching', err);
      });
  });

  // 할일의 완료상태 토글
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  //삭제
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const modifyTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2">TodoList</h1>
        </div>
        <TodoInput setTodos={setTodos} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      </div>
    </div>
  );
}

export default App;
