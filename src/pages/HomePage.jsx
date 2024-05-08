import React from "react";
import { Link } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import { useEffect, useState } from "react";
import axios from "axios";
function HomePage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getAllTodo();
  }, []);

  async function getAllTodo() {
    try {
      const response = await axios.get(
        "https://cc17-assessment-api.onrender.com/v1/todo?userId=32"
      );
      setTodos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const createTodo = async () => {
    const data = { title: newTodo, complete: false };
    try {
      let response = await axios.post(
        "https://cc17-assessment-api.onrender.com/v1/todo?userId=32",
        data
      );
      setTodos([response.data, ...todos]);
      console.log(todos);
      setNewTodo("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (todoId) => {
    console.log("delete todoId", todoId);
    if (!todoId) return;
    try {
      await axios.delete(
        `https://cc17-assessment-api.onrender.com/v1/todo/e5acdeca-198b-42ed-bcc3-a6b4f0f53dfb?userId=${todoId}`
      );
      console.log("delete successs");
      setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (todoId, updateTodo) => {
    try {
      const response = await axios.patch(
        `https://cc17-assessment-api.onrender.com/v1/todo/e5acdeca-198b-42ed-bcc3-a6b4f0f53dfb?userId=${todoId}`,
        updateTodo
      );

      setTodos((prev) =>
        prev.reduce((acc, todo) => {
          acc.push(todo.id === todoId ? response.data : todo);
          return acc;
        }, [])
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="todo-root">
      <div className="todo-mainBody">
        <div className="todo-main-taskPart">
          <div className="todo-title">
            <div className="title">
              <h1>My Todo</h1>
            </div>
            <div className="todo-title-img">
              <img src="src/images/01_rocket.png" onClick={createTodo} />
            </div>
          </div>

          <label htmlFor="newTask" className="todo-task">
            new task
            <input
              id="newTask"
              className="newTask"
              value={newTodo}
              onChange={handleChangeTodo}
              //   onKeyDown={createTodo}
            ></input>
          </label>

          <div className="todo-list">
            {todos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
          </div>
        </div>
        <div className="todo-button">
          <Link to="/">
            <button>LOG OUT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
