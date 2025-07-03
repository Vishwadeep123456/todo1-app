import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center border p-3 mb-2 rounded shadow bg-white">
      <span className="text-lg">{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
