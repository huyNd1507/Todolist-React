import React from "react";
import Todo from "./Todo";

function Todolist({ todos, setTodos, filterTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
