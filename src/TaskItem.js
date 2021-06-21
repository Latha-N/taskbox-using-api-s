import React,{useState} from 'react'
import axios from 'axios'
import EDitTask from './EditTask'

const TaskItem = (props) =>{
    const {id,title,status,removeTask, editTask} = props
    const [toggle, setToggle] = useState(false)

    const handleToggle =()=>{
        const result = !toggle
        setToggle(result)
        
    }

    const handleRemove =(id) =>{
        const confirmRemove=window.confirm("Are you sure you want to remove?")
        if(confirmRemove){
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
                .then((response)=>{
                    const result=response.data
                    removeTask(result.id)
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }
    }

    return(
        <div>

            {
                toggle ? (
                    <div>
                        <EDitTask 
                        id={id}
                        title={title}
                        status={status}
                        editTask={editTask}
                        handleToggle={handleToggle}
                        />
                        <button onClick={handleToggle}>cancel</button>
                    </div>
                ) : (
                    <div>
                        <h3>{title}</h3>
                        <button onClick={handleToggle}>edit</button>
                        <button onClick={(()=>{
                         handleRemove(id)
                         })}>remove</button>
                    </div>
                )
            }
            
        </div>
    )
}

export default TaskItem