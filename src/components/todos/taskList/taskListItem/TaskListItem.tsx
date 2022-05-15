import React, {FC, useMemo} from 'react'
import {TasksResponse} from '../../../../services/types/tasksResponse'
import {Badge, Button, ListGroupItem} from 'reactstrap'
import TaskDeadline from './TaskDeadline'
import {getTaskStatus} from '../../helpers/status'
import {ITaskStatus} from '../../types/statusTypes'
import {useActions} from '../../../../hooks/useActions'
import TaskListItemHref from './TaskListItemHref'
import TaskNoteBadge from './TaskNoteBadge'

const TaskListItem: FC<TasksResponse> = (task) => {

    const {updateTaskStatus, setEditTaskModal, setSelectedTask} = useActions()

    const taskStatus: ITaskStatus = useMemo(() => {
        return getTaskStatus(task.periodicity, task.startedAt, task.finishedAt, task.deadline)
    }, [task.updatedAt])


    const actionButtonHandler = () => {
        updateTaskStatus({id: task.id, mode: taskStatus.actionText})
    }

    const propsButtonHandler = () => {
        setSelectedTask(task)
        setEditTaskModal(true)
    }

    return (
        <ListGroupItem className="d-flex flex-row justify-content-between">

            <div>
                <TaskDeadline
                    deadline={task.deadline}
                    periodicity={task.periodicity}
                />
                {task.name}
                <Badge>{taskStatus.statusText}</Badge>
                <TaskNoteBadge {...task}/>
            </div>

            <TaskListItemHref taskHrefs={task.taskHrefs}/>

            <div>
                <Button
                    size="sm"
                    onClick={propsButtonHandler}
                >
                    ...
                </Button>

                <Button
                    size="sm"
                    onClick={actionButtonHandler}
                >
                    {taskStatus.actionText}
                </Button>
            </div>


        </ListGroupItem>
    )
}

export default TaskListItem