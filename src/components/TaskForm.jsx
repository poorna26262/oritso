import { useState, useEffect } from "react";

const TaskForm = ({ onSave, editingTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "pending",
  });

  useEffect(() => {
    if (editingTask) setTask(editingTask);
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({ title: "", description: "", due_date: "", status: "pending" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input name="title" value={task.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" required />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
      <input name="due_date" type="date" value={task.due_date} onChange={handleChange} className="w-full p-2 border rounded" />
      <select name="status" value={task.status} onChange={handleChange} className="w-full p-2 border rounded">
        <option>pending</option>
        <option>in progress</option>
        <option>completed</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        {task.id ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
