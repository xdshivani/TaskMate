import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import ShowTask from "./Components/ShowTask";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
  const [todo, setTodo] = useState({});

  useEffect(()=>{
    localStorage.setItem('taskList', JSON.stringify(taskList));

  },[taskList])
  return (
    <>
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        todo={todo}
        setTodo={setTodo}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        todo={todo}
        setTodo={setTodo}
      />
    </>
  );
}

export default App;
