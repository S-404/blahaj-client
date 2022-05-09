import React, {FC} from 'react'
import {TasksResponse} from '../../services/types/tasksResponse'
import {useActions} from '../../hooks/useActions'
import {Button} from 'reactstrap'

const TaskListItem: FC<TasksResponse> = (task) => {

    const {removeTask} = useActions()

    const removeTaskHandler = () => {
        if (window.confirm(`remove task: ${task.name}?`)) {
            removeTask(task.id)
        }
    }

    const editTaskHandler = () => {
        console.log(`edit ${task.name}`)
    }

    return (
        <div>
            <div>{task.name}</div>
            <div>{task.taskGroup}</div>
            <div>{task.note}</div>

            <Button
                size='sm'
                onClick={removeTaskHandler}
            >
                Remove
            </Button>

            <Button
                size='sm'
                onClick={editTaskHandler}
            >
                Edit
            </Button>

        </div>
    )
}

export default TaskListItem