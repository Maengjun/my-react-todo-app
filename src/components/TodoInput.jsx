import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';

function TodoInput({ setTodos }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { title: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center mt-4 bg-green-100 p-2 rounded-lg shadow-md mb-6"
    >
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add your items"
        className="border-none outline-none p-2 flex-grow bg-green-100 focus:ring-0"
      ></input>
      <button
        type="submit"
        className="bg-green-500 rounded-full text-white p-2 shadow-md hover:bg-green-600 transition duration-300"
      >
        <FiPlus size={20} />
      </button>
    </form>
  );
}

export default TodoInput;
