import React from 'react'
import TaskItem from './TaskItem'

const TasksList = (props) =>{
    const {tasks, removeTask,editTask} = props
    return(
        <div>
            {
                tasks.length===0 ? (
                    <div>
                        <h1>No tasks found</h1>
                        <p>Add your first task</p>
                    </div>
                ) : (
                    <div>
                        <h2>My Tasks-{tasks.length}</h2>
                        {
                            tasks.map((task)=>{
                                return <TaskItem key={task.id} 
                                {...task} 
                                removeTask={removeTask}
                                editTask={editTask}/>
                            })
                        }

                    </div>
                )
            }
        </div>
    )
}

export default TasksList