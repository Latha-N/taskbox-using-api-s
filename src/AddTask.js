import React, { useState } from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const AddTask = (props) =>{
    const {addTask} = props
    const [isSaved, setIsSaved] = useState(false)


    const toggleIsSaved = () =>{
        setIsSaved(false)
    }
    
    const formSubmit = (task) =>{
        axios.post('http://localhost:3033/api/tasks',task)
            .then((response)=>{
                const result = response.data
                addTask(result)
                setIsSaved(true)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    return(
        <div>
            <h2>Add Task</h2>
            <TaskForm 
            formSubmit={formSubmit}
            isSaved={isSaved}
            toggleIsSaved={toggleIsSaved}
            />
        </div>
    )
}

export default AddTask