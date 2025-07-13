"use client";

import { useState, useEffect } from "react";
import TodoList from "@/components/todoComponents/todoList";
import TodoInput from "@/components/todoComponents/TodoInput";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error("Error loading todos:", error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input || !input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
    setInput("");
  };

  const toggleDone = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    if (!newText || !newText.trim()) return;
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText.trim() } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const completedCount = todos.filter((todo) => todo.done).length;
  const totalCount = todos.length;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 animate-fadeIn">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center animate-slideDown">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Todo App</h1>
          <p className="text-gray-600">
            {completedCount} of {totalCount} tugas yang selesai
          </p>
        </div>

        <div className="animate-slideUp">
          <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
        </div>

        <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} editTodo={editTodo} />

        {completedCount > 0 && (
          <button onClick={clearCompleted} className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105 active:scale-95 animate-slideUp cursor-pointer">
            Clear Completed ({completedCount})
          </button>
        )}
      </div>
    </main>
  );
}
