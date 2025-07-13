export default function TodoItem({ todo, toggleDone }) {
  return (
    <li
      className={`px-4 py-2 rounded cursor-pointer ${
        todo.done ? "bg-green-200 text-gray-300 line-through" : "bg-red-200 border border-gray-300 hover:bg-gray-50"
      }`}
    >
      {todo.text}
    </li>
  );
}
