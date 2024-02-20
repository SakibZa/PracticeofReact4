import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {id:1, name: "Sakib ", completed:"false"},
    {id:2, name:"zaidi", completed:"true"},
    {id:3 , name:"Husain", completed: "true"}]);

    function handleDelete(id){
         
      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="App">
      <h1>Task Lists</h1>
      <ul>
         {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.id} - {task.name}</span>
              <button onClick = {() => handleDelete(task.id)}>Delete</button>
            </li>
         ))}

      </ul>
    </div>
  );
}

export default App;
