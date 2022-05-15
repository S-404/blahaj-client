import React, {FC, useMemo} from 'react'
import {TasksResponse} from '../../../../services/types/tasksResponse'
import {Button, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'
import TaskDeadline from './TaskDeadline'
import {getTaskStatus} from '../../helpers/status'
import {ITaskStatus} from '../../types/statusTypes'
import {useActions} from '../../../../hooks/useActions'
import TaskListItemHref from './TaskListItemHref'
import TaskNoteBadge from './TaskNoteBadge'
import TaskStatusBadge from './TaskStatusBadge'

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

            <ListGroupItemHeading>
                <TaskDeadline
                    deadline={task.deadline}
                    periodicity={task.periodicity}
                />
                <TaskStatusBadge
                    statusText={taskStatus.statusText}
                />
            </ListGroupItemHeading>

            <ListGroupItemText >
                title={task.name}
            </ListGroupItemText>
            <div>

                <TaskNoteBadge
                    id={task.id}
                    note={task.note}
                />

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