import { useState } from 'react'
import './App.css'
import { TaskInput } from './taskInput';
import { TaskList } from './TaskList';

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
    setTaskText(event.target.value);
  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const completeTask = (taskId: number) => {
    setTasks(tasks.map((task) => 
    task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task
    ));
  };

  
  return (
    <>
    <>
      <TaskInput taskText={taskText} onInputChange={handleInput} onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
    </>
    </>
  );
}

export default App
