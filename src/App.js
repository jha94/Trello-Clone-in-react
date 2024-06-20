import { useState, Fragment } from "react";
import "./App.css";
import { status, handleOnClick, handleOnChange } from "./Utils";

function App() {
  const [todo, setTodo] = useState("");
  const [todoStatus, setTodoStatus] = useState("");
  const [tasks, setTaks] = useState([]);

  const todoInput = () => {
    return (
      <>
        <input
          placeholder="Enter todo"
          className="taskInput"
          onChange={(event) => handleOnChange(event, "enterTodo", { setTodo })}
          value={todo}
        />
        <select
          className="taskInput"
          onChange={(event) =>
            handleOnChange(event, "selectStatus", { setTodoStatus })
          }
          value={todoStatus}
        >
          {status.map((value) => (
            <option key={value}>{value.toUpperCase()}</option>
          ))}
        </select>
        <button
          className="addBtn"
          onClick={() =>
            handleOnClick("add", {
              tasks,
              setTaks,
              todo,
              setTodo,
              todoStatus,
              setTodoStatus,
            })
          }
        >
          Add
        </button>
      </>
    );
  };

  const todoList = () => {
    return (
      <div className="taskList">
        {status.map((type) => {
          return (
            <div className="task" key={type}>
              <div>{type.toUpperCase()}</div>
              {tasks.map(({ name, status, ind }, index) => {
                return status.toLowerCase() === type ? (
                  <div key={ind} className="taskName">
                    {name}
                    <button
                      className="addBtn"
                      style={{ alignSelf: "center" }}
                      onClick={() => {
                        handleOnClick("edit", {
                          tasks,
                          setTaks,
                          todoStatus,
                          setTodoStatus,
                          todo,
                          setTodo,
                          name,
                          status,
                          index,
                        });
                      }}
                    >
                      Edit
                    </button>
                  </div>
                ) : (
                  <Fragment key={ind} />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="App">
      {todoInput()}
      {todoList()}
    </div>
  );
}

export default App;
