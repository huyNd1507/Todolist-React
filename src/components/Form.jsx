import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";

function Form({ setInputText, todos, setTodos, inputText, setStatus }) {
  const handleInputchange = (e) => {
    setInputText(e.target.value);
  };

  const handleSunmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        id: Math.random() * 1000,
        completed: false,
      },
    ]);
    setInputText("");
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={handleInputchange}
        type="text"
        className="todo-input"
      />
      <button onClick={handleSunmit} type="submit" className="todo-button">
        <AiOutlinePlusSquare />
      </button>
      <div className="select">
        <select onClick={handleStatus} name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
