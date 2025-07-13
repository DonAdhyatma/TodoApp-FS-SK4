export default function TodoInput({ input, setInput, addTodo }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="flex gap-2 animate-slideUp">
      <input
        type="text"
        value={input || ""}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Masukkan Jadwal Hari Ini..."
        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm focus:scale-[1.02] transform"
      />
      <button
        onClick={addTodo}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-50 hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-200 shadow-sm font-medium transform hover:scale-100 active:scale-95 hover:shadow-lg cursor-pointer"
        disabled={!input || !input.trim()}
      >
        Add Task
      </button>
    </div>
  );
}
