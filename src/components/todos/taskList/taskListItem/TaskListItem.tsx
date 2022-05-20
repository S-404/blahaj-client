import React, {FC, useMemo} from 'react'
import {TasksResponse} from '../../../../services/types/tasksResponse'
import {Badge, Button, ListGroupItem, ListGroupItemHeading} from 'reactstrap'
import {defineActionButtonColor, defineStatusBadgeColor, getTaskStatus} from '../../helpers/status'
import {ITaskStatus} from '../../types/statusTypes'
import {useActions} from '../../../../hooks/useActions'
import TaskListItemHref from './TaskListItemHref'
import TaskNoteBadge from './TaskNoteBadge'
import {getDeadlineValue} from '../../helpers/deadline'
import './taskListItem.css'

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
        <ListGroupItem
            color={defineStatusBadgeColor(taskStatus.statusText)}
            className="task-list-item d-flex flex-row"
        >

            <div className="d-flex flex-column col-2">
                <b> {getDeadlineValue(task.deadline, task.periodicity)}</b>
            </div>

            <ListGroupItemHeading>
                {task.name}
            </ListGroupItemHeading>

            <div>
                <TaskNoteBadge
                    id={task.id}
                    note={task.note}
                />

            </div>

            <div className='task-list-item__status-badge'>
                <Badge color={defineStatusBadgeColor(taskStatus.statusText)}>
                    {taskStatus.statusText}
                </Badge>
            </div>

            <div className="task-list-item__action-buttons">
                <TaskListItemHref taskHrefs={task.taskHrefs}/>
                <div>

                    <Button
                        outline
                        size="sm"
                        onClick={propsButtonHandler}
                    >
                        ...
                    </Button>

                    <Button
                        outline
                        size="sm"
                        onClick={actionButtonHandler}
                        color={defineActionButtonColor(taskStatus.statusText)}
                    >
                        {taskStatus.actionText}
                    </Button>
                </div>
            </div>


        </ListGroupItem>
    )
}

export default TaskListItem