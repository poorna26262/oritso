const TaskList = ({ tasks, onEdit, onDelete }) => (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="p-4 my-2 border rounded shadow">
          <h2 className="font-bold text-xl">{task.title}</h2>
          <p>{task.description}</p>
          <p>Due: {task.due_date}</p>
          <p>Status: {task.status}</p>
          <div className="flex space-x-2 mt-2">
            <button onClick={() => onEdit(task)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
            <button onClick={() => onDelete(task.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
  
  export default TaskList;
  