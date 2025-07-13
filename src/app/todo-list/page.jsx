"use client";

import { useState } from "react";
import TodoList from "@/components/todoComponents/todoList";
import TodoInput from "@/components/todoComponents/TodoInput";

export default function TodoPage() {
  // const todos = [
  // 	{id: 1, text: "memasak", done: false},
  // 	{id: 2, text: "memasak", done: false},
  // 	{id: 3, text: "memasak", done: false},
  // 	{id: 4, text: "memasak", done: false}
  // ]
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };
  console.log("todos", todos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md space-y-4">
        <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </main>
  );
}
