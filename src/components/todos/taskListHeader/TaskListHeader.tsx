import React, {FC} from 'react'
import TaskListFilter from './TaskListFilter'

const TaskListHeader:FC = () => {
    return (
        <div>
            <TaskListFilter/>
        </div>
    )
}

export default TaskListHeader