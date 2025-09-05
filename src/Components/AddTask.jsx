import React from "react";

function AddTask({ taskList, setTaskList, todo, setTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.id) {
      const date = new Date();
    
      const updatedTaskList = taskList.map((task) => 
        
        task.id === todo.id
          ? {
              id: todo.id,
              name: todo.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : task
      );

      setTaskList(updatedTaskList);
      setTodo({});
    } else {
      console.log(e.target.task.value);

      const date = new Date();

      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTodo({});
    }
  };

  //console.log(taskList);

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          value={todo.name || ""}
          required
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <button type="submit">{todo.id ? 'Update' : 'Add' }</button>
      </form>
    </section>
  );
}

export default AddTask;
