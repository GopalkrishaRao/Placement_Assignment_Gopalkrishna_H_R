import { useContext, useEffect, useState } from "react";
import { CheckIcon } from '@heroicons/react/24/solid'
import { todoContext } from "../context/context";

const Editform = () => {
  const {closeEditMode, editedTask, updateTask} = useContext(todoContext);

  const [updatedTask, setUpdatedTask] = useState(editedTask.name);

  useEffect(()=>{
    const closeModalIfEscaped = (e) => {
        e.key === "Escape" && closeEditMode();
      }
  
      window.addEventListener('keydown', closeModalIfEscaped)
  
      return () => {
        window.removeEventListener('keydown', closeModalIfEscaped)
      }

  },[closeEditMode])

     const handleFormSubmit = (e)=>{
        e.preventDefault();
        updateTask({...editedTask, name: updatedTask})
       };

  return (
  <>
  <div role="dialog"
        aria-labelledby="editTask"
        // close funciton if clicked outside the edit option
        onClick={(e)=>{e.target===e.currentTarget && closeEditMode()}}
        >
    <form 
    className="todo"
    onSubmit={handleFormSubmit}
    >
        <div className="wrapper">
            <input 
              type="text"
              id="task"
              className="input"
              value={updatedTask}
              onInput={(e)=>setUpdatedTask(e.target.value)}
              placeholder="Update Task"
              required
              maxLength={60}
              autoFocus
              />
              <label htmlFor="editTask" className="label">Update Task</label>
        </div>
        <button 
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTask}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24}/>
        </button>
    </form>
    </div>
</>
  );
}
export default Editform;