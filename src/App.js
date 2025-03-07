import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/styles.css";

// Home Component
const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to My React App</h1>
      <p>This is the home page of the application.</p>
      <p>Explore the different pages using the navigation menu.</p>
    </div>
  );
};

// Props Page Component (Enhanced for Dynamic Message)
const PropsPage = ({ message }) => {
  const [customMessage, setCustomMessage] = useState(message);

  return (
    <div className="container">
      <h1>{customMessage}</h1>
      <p>
        This page demonstrates how props work in React. Props allow components
        to receive data from their parent components.
      </p>
      <input
        type="text"
        value={customMessage}
        onChange={(e) => setCustomMessage(e.target.value)}
        placeholder="Type a new message"
      />
    </div>
  );
};

// Todo List Component
const TodoList = () => {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a project",
    "Master JavaScript",
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <p>Manage your daily tasks effectively with this todo list.</p>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button className="delete-btn" onClick={() => removeTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/props">Props Page</Link>
        </li>
        <li>
          <Link to="/todos">Todo List</Link>
        </li>
      </ul>
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/props" element={<PropsPage message="Hello World!" />} />
        <Route path="/todos" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

export default App;
