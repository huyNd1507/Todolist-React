import React from "react";
import { AiOutlineCheck, AiFillDelete } from "react-icons/ai";

function Todo({ text, todo, todos, setTodos }) {
  const hanndleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const handleCheckCompleted = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-item">
      <li className={`${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={handleCheckCompleted}>
        <AiOutlineCheck />
      </button>
      <button onClick={hanndleDelete}>
        <AiFillDelete />
      </button>
    </div>
  );
}

export default Todo;
