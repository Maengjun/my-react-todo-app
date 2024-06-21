import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo, modifyTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    modifyTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveClick();
    }
  };

  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow p-2 border border-gray-300 rounded-md"
          autoFocus
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`flex-grow cursor-pointer ${
            todo.completed ? 'line-through' : ''
          }`}
        >
          {todo.title}
        </span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            onClick={handleSaveClick}
            className="p-2 rounded-full shadow-md transition duration-300 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              className="p-2 rounded-full shadow-md transition duration-300 bg-orange-500 hover:bg-orange-600 text-white"
            >
              <FiEdit2 />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-2 rounded-full shadow-md transition duration-300 bg-red-500 hover:bg-red-600 text-white"
            >
              <FiTrash2 />
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
