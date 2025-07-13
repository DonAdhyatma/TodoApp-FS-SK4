import { useState } from "react";

export default function TodoItem({ todo, toggleDone, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText && editText.trim()) {
      editTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
    if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className={`p-4 rounded-lg shadow-sm border transition-all duration-300 transform hover:scale-[1.02] animate-slideUp ${todo.done ? "bg-green-50 border-green-200 text-green-800" : "bg-white border-gray-200 hover:shadow-md"}`}>
      {isEditing ? (
        <div className="flex gap-2 items-center animate-fadeIn">
          <input
            type="text"
            value={editText || ""}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200"
            autoFocus
          />
          <button onClick={handleEdit} className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-all duration-200 transform hover:scale-105 active:scale-95">
            Save
          </button>
          <button onClick={handleCancel} className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600 transition-all duration-200 transform hover:scale-105 active:scale-95">
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-grow">
            <button
              onClick={() => toggleDone(todo.id)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-90 ${
                todo.done ? "bg-green-500 border-green-500 text-white" : "border-gray-300 hover:border-green-500"
              }`}
            >
              {todo.done && (
                <svg className="w-3 h-3 animate-fadeIn" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <span className={`flex-grow cursor-pointer transition-all duration-200 ${todo.done ? "line-through text-gray-500" : "text-gray-800"}`} onClick={() => toggleDone(todo.id)}>
              {todo.text}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-2 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
              disabled={todo.done}
            >
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
