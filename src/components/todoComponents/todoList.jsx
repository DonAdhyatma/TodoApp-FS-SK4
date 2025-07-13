import TodoItem from "@/components/todoComponents/todoItem";

export default function TodoList({ todos, toggleDone, deleteTodo, editTodo }) {
  return (
    <div className="animate-fadeIn">
      <ul className="space-y-3">
        {todos.length === 0 ? (
          <li className="text-center py-8 text-gray-500 animate-slideUp">
            <div className="animate-bounce">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-lg font-medium">Belum ada jadwal tugas!</p>
              <p className="text-sm">Tambahkan tugas untuk memulai di atas 📅</p>
            </div>
          </li>
        ) : (
          todos.map((todo, index) => (
            <div key={todo.id} className="animate-slideUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <TodoItem todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} editTodo={editTodo} />
            </div>
          ))
        )}
      </ul>
    </div>
  );
}
