import { useState } from 'react'
import './App.css'


function App() {
  const [taskArray, setTaskArray] = useState([])
  const [taskText, setTaskText ] = useState ('')

  const handleAddTask = () => {
    setTaskArray([])

  }
  
  return (
    <>
      <input type="text" onChange={(e) => {setTaskText(e.target.value)}} value={taskText}/>
      <button onClick={handleAddTask}>Añadir tarea</button>
      <ul>
        <li>

        </li>
      </ul>
    </>
  )
}

export default App
