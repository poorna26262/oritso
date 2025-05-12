import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get(`${API_URL}/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSave = async (task) => {
    if (task.id) {
      await axios.put(`${API_URL}/tasks/${task.id}`, task);
    } else {
      await axios.post(`${API_URL}/tasks`, task);
    }
    fetchTasks();
    setEditingTask(null);
  };

  const handleEdit = (task) => setEditingTask(task);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/tasks/${id}`);
    fetchTasks();
  };

  const handleSearch = async (query) => {
    const res = await axios.get(`${API_URL}/tasks/search?q=${query}`);
    setTasks(res.data);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Manager</h1>
      <TaskForm onSave={handleSave} editingTask={editingTask} />
      <SearchBar onSearch={handleSearch} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
