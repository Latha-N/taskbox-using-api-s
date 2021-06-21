import React from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const EditTask = (props) =>{
    const {id,title,status,editTask,handleToggle} = props

    const formSubmit = (task) =>{
        axios.put(`http://localhost:3033/api/tasks/${task.id}`,task)
        .then((response)=>{
            const result=response.data
            editTask(result)
            handleToggle()
        })
        .catch((err)=>{
            alert(err.message)
        })

    }

    return(
        <div>
            <h1>Edit Task</h1>
            <TaskForm
            id={id}
            title={title}
            status={status}
            formSubmit={formSubmit}/>
        
        </div>
    )
}

export default EditTask