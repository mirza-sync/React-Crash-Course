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

  return (
    <div className="container">
      <Header title="My Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
