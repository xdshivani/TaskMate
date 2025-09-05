import React from 'react'

function ShowTask({taskList,setTaskList, todo, setTodo}) {
//   const tasks = 
// [
//   {id:1000, name:'Task A', time:'2:09:31 AM 29/8/2025'},
//   {id:1001, name:'Task B', time:'2:09:31 AM 29/8/2025'},
//   {id:1002, name:'Task C', time:'2:09:31 AM 29/8/2025'},
// ]

const handleEdit = (id) =>{
  const selectedTask = taskList.find(task => task.id === id);
  console.log(selectedTask);
  setTodo(selectedTask);
}

const handleDelete = (id) =>{
  const updatedList = taskList.filter(task => task.id !== id);
  setTaskList(updatedList);
}

  return (
   <section className='showTask'>
    <div className="head">
      <div>
        <span className='title'>Todo</span>
        <span className='count'>{taskList.length}</span>
      </div>
      <button onClick={()=>setTaskList([])} className='clearAll' >Clear All</button>
    </div>
    <ul>
      {taskList.map((task)=>{
        return(
          <li key={task.id}>
        <p>
          <span className='name'>{task.name}</span>
          <span className='time'>{task.time}</span>
          </p>
          <i onClick={()=>handleEdit(task.id)} className='bi bi-pencil-square' ></i>
          <i onClick={()=>handleDelete(task.id)} className='bi bi-trash' ></i>
      </li>
        )
      })}
      
    </ul>
   </section>
  )
}

export default ShowTask
