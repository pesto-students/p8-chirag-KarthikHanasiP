import './App.css';
import React, { useState } from "react";

function App() {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      },
    ]);
    setInput("");
  };

  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete){
          //Task is pending
          setCompletedTaskCount(completedTaskCount + 1);
        } else {
          //Task is complete
          setCompletedTaskCount(completedTaskCount - 1);
        }
      item = { ...task, complete: !task.complete };
      } else item = { ...task };
      return item;
    });
    setTodoList(list);
  };

  const handleClear = () => {
    setTodoList([]);
    setCompletedTaskCount(0);
  }

  return (

    <div className='App'>
      <div>
          <h2>Todo List</h2>
          <input type="text" className='input' value={input} onChange={(e) =>setInput(e.target.value)}/>
          <button className='button' onClick={() => handleClick()}>Add</button>
        <div className='task-count'>
            <span className='pending-task'><b>Pending Tasks</b> {todoList.length - completedTaskCount}</span>

            <span className='completed-task'><b>Completed Tasks</b> {completedTaskCount}</span>
        </div>
        <div>
          <ul>
          {todoList.map((todo) => {
          return (
            <li
              complete={todo.complete}
              id={todo.id}
              onClick={() => handleComplete(todo.id)}
              style={{
                listStyle: "none",
                textDecoration: todo.complete && "line-through",
              }}
            >
              {todo.task}
            </li>
          );
        })}
          </ul>
        </div>
        <button className='button' onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
