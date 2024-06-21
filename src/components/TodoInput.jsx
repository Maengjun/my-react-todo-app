import { FiPlus } from 'react-icons/fi';
import { useState } from 'react';

function TodoInput({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="flex items-center mt-4 bg-green-100 p-2 rounded-lg shadow-md mb-6"
    >
      <input
        type="text"
        placeholder="Add your items"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border-none outline-none p-2 flex-grow bg-green-100 focus:shadow-none"
      />
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
