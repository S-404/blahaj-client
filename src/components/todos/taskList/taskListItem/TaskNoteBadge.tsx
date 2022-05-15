import React, {FC} from 'react'
import {TasksResponse} from '../../../../services/types/tasksResponse'
import {Badge, UncontrolledTooltip} from 'reactstrap'


const TaskNoteBadge: FC<TasksResponse> = (task) => {

    if (!task.note) return null

    return (
        <div>
            <Badge
                id={`taskNote${task.id}`}
                color="warning"
                pill
            >
                !
            </Badge>
            <UncontrolledTooltip
                flip
                target={`taskNote${task.id}`}
            >
                {task.note}
            </UncontrolledTooltip>
        </div>

    )
}

export default TaskNoteBadge