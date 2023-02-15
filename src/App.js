import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "../src/components/Form";
import Todolist from "../src/components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    HandleFiter();
    saveLocalStorage();
  }, [todos, status]);

  const HandleFiter = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  // Save to Local Storage
  const saveLocalStorage = () => {
    localStorage.setItem("todo", JSON.stringify(todos));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todo"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist filterTodos={filterTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
