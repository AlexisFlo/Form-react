import { useState, useContext} from "react"
import { TaskContext } from "../context/TaskContext"


function TaskForm() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { createTask }= useContext(TaskContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
    description
  });
  setTitle("");
  setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit = {handleSubmit} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3">Make your task</h1>
        <input placeholder="Write your task" onChange={(e) => setTitle(e.target.value)}
        value={title} 
        className="bg-slate-800 w-full mb-4 px-3 py-2 rounded border border-gray-700 text-gray-100"
        autoFocus/>
        <textarea placeholder="Write a description about the task" onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-800 w-full mb-4 px-3 py-2 rounded border border-gray-700 text-gray-100"></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white">
          Save
        </button>
      </form>
    </div>
  )
}

export default TaskForm