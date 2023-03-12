import { MdDelete } from "react-icons/md";
const Task = ({ task, onDelete, onToggle}) => {
  return (
    <div 
        className={`task ${task.reminder ?
        'reminder' : ''}`}
        onDoubleClick={() => onToggle(task.id)}
    >
      <details>
        <summary>
            {task.text}{''} <MdDelete 
            style={{ cursor:
            'pointer'}} 
            onClick={() => onDelete(task.id)}
            />
            
        </summary>
      <p>{task.day}</p>
      </details>  
    </div>
  )
}

export default Task
