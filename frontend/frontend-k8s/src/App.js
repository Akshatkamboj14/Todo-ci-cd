import React, { useState, useEffect } from 'react';
import './App.css';

const API_URL = '/api/tasks'; // Change this later

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTasks(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, completed: false };
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    setTitle('');
    setDescription('');
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    fetchTasks();
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
