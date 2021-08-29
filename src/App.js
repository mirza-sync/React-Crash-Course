import React, { useState } from 'react'
import Header from "./components/Header";
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Sleep',
        day: 'Tuesday',
        reminder: false
    },
    {
        id: 2,
        text: 'Eat',
        day: 'Tuesday',
        reminder: true
    },
    {
        id: 3,
        text: 'Code',
        day: 'Tuesday',
        reminder: true
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className="container">
      <Header title="My Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} />
      ) : (
        'No task to show'
      )}
    </div>
  );
}

export default App;
