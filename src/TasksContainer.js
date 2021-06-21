import React,{useState,useEffect} from 'react'
import axios from 'axios'
import TasksList from './TasksList'
import AddTask from './AddTask'

const TasksContainer = (props) =>{
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3033/api/tasks')
            .then((response)=>{
                const result=response.data
                setTasks(result)
            })
            .catch((err)=>{
                alert(err.message)
            })

    },[])

    

    const addTask = (task) =>{
        const result=[ ...tasks,task]
        setTasks(result)

    }

    const removeTask = (id) =>{
        const result = tasks.filter((task)=>{
            return task.id != id
        })
        setTasks(result)
    }

    const editTask = (task) =>{
        const result=tasks.map((t)=>{
            if(t.id===task.id){
                return {...t,...task}
            }else{
                return {...t}
            }
        })
        setTasks(result)
    }

    
    return (
        <div>
            <TasksList tasks={tasks} 
            removeTask={removeTask}
            editTask={editTask}/>
            <AddTask addTask={addTask}/>
        </div>
    )
}

export default TasksContainer