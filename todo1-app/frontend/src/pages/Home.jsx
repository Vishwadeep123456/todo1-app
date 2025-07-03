import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React learning' },
    { id: 2, text: 'MERN Stack project create ' },
  ]);

  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
    };

    setTodos([newTodo, ...todos]);
    setInput('');
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">📋 My Todo List</h2>

      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="नया काम लिखें..."
          className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
        >
          ➕ Add
        </button>
      </div>

      <div>
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">no w0rk found 😊</p>
        ) : (
          todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
