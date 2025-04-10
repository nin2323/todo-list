import { useState } from 'react'
import './App.css'
import { TaskInput } from './taskInput';
import { TaskList } from './TaskList';
import { TaskFilter } from './taskFilter';
import { useEffect } from 'react';
import unicornioJosmi from './assets/unicornio-josmi.png'

interface Task {
  text: string;
  isCompleted: boolean;
  id: number
}

function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState<Task []>([]);
  const [filter, setFilter] = useState<'completed' | 'pending' | 'all'>('all');
  const [showUnicorn, setShowUnicorn] = useState(false);
 
 
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


  useEffect(() => {
    const completedTasks = tasks.filter((task) => task.isCompleted).length;  // filter recorre tasks y devuelve solo la stareas que estan completadas, length nos da el numero de tareas completadas
    if (completedTasks >= 4) {
      setShowUnicorn(true); // Mostrar unicornio después de completar 4 tareas
      setTimeout(() => setShowUnicorn(false), 3000); // Ocultar unicornio después de 3 segundos
    }
  }, [tasks]);  // cada vez que tasks cambia se ejecuta 

  

  const filterTasks = (filter: 'completed' | 'pending' | 'all') => {
    setFilter(filter); 
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'completed' ? task.isCompleted :
    filter === 'pending' ? !task.isCompleted : true // 'all' no filtra
  );

  return (
    <>
      <TaskInput taskText={taskText} onInputChange={handleInput} onAddTask={handleAddTask} />
      <TaskFilter onChangeFilter={filterTasks} />
      <TaskList tasks={filteredTasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
      {showUnicorn && (              // con el &&, si el showUnicorn es true entonces nos devuelve el div, si no es true no devuelve nada
        <div className="unicorn">
          <img src={unicornioJosmi} alt="" />
        </div>
      )}
    </>
  );
}

export default App
