import { useState } from "react"


function TaskForm({createTask}) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask(title)
  }

  return (
      <form onSubmit = {handleSubmit}>
        <input placeholder="Write your task" onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Write a description about the task" id="" cols="30" rows="10" onChange={(e) => setDescription(e.target.value)}></textarea>
        <button>
          Save
        </button>
      </form>
  )
}

export default TaskForm