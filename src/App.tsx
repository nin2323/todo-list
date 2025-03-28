import { FormEventHandler, use, useState } from 'react'
import './App.css'

interface Task {
  text: string;
  isCompleted: boolean;
  id: number
}
function App() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState<Task []>([])

  const handleAddTask = () => {
    setTasks([...tasks, { text: taskText, isCompleted: false, id: Date.now()}]);
    setTaskText('');
  }

  const handleInput = (event: any) => {
    setTaskText(event.target.value)
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const completeTask = (taskId: number) => {
    setTasks(tasks.map((task) => 
    task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task
    ));
  };

  console.log(tasks)
   
  return (
    <>
    <div className='add-task'>
      <input type="text" onInput={handleInput} value={taskText}/>
      <button className='button' onClick={handleAddTask}>Añadir tarea</button>
    </div>
    <div className='task-list'>
      {tasks.map((task) => {
        return (
          <div className='task' key={task.id}>
            <div>
              <input onChange={() => completeTask(task.id) } type="checkbox" checked={task.isCompleted} />
              <span className={task.isCompleted ? 'completed' : ''}>{task.text}</span>
            </div>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </div>
        )
      })}     
    </div>
    </>
  )
}

export default App
