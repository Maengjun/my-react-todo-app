import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  // 초기 데이터 불러오기
  useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.error('Error occurred on fetching', err);
      });
  }, []);

  // 할일의 완료상태 토글
  const toggleComplete = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    axios
      .put(`http://localhost:3001/todos/${id}`, {
        ...todo,
        completed: !todo.completed,
      })
      .then((res) => {
        const newTodos = todos.map((todo) =>
          todo.id === id ? res.data : todo
        );
        setTodos(newTodos);
      })
      .catch((err) => {
        console.error('Error occurred on toggling complete', err);
      });
  };

  // 새로운 할 일 추가
  const addTodo = (newTodoTitle) => {
    const newTodoItem = { title: newTodoTitle, completed: false };
    axios
      .post('http://localhost:3001/todos', newTodoItem)
      .then((res) => {
        setTodos([...todos, res.data]);
      })
      .catch((err) => {
        console.error('Error occurred on adding todo', err);
      });
  };

  // 할 일 삭제
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then(() => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      })
      .catch((err) => {
        console.error('Error occurred on deleting todo', err);
      });
  };

  // 할 일 수정
  const modifyTodo = (id, updatedTitle) => {
    const todo = todos.find((todo) => todo.id === id);
    axios
      .put(`http://localhost:3001/todos/${id}`, {
        ...todo,
        title: updatedTitle,
      })
      .then((res) => {
        const newTodos = todos.map((todo) =>
          todo.id === id ? res.data : todo
        );
        setTodos(newTodos);
      })
      .catch((err) => {
        console.error('Error occurred on modifying todo', err);
      });
  };

  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2">TodoList</h1>
        </div>
        <TodoInput addTodo={addTodo} />
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
