import React, {FC} from 'react'
import TaskListFilter from './TaskListFilter'
import TaskListSort from './TaskListSort'

const TaskListHeader:FC = () => {
    return (
        <div>
            <TaskListFilter/>
            <TaskListSort/>
        </div>
    )
}

export default TaskListHeader