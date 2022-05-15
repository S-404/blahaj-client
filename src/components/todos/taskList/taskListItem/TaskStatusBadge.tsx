import React, {FC} from 'react'
import {Badge,Container} from 'reactstrap'
import {StatusTextTypes} from '../../types/statusTypes'

interface TaskStatusBadgePropsTypes {
    statusText: string
}

const TaskStatusBadge: FC<TaskStatusBadgePropsTypes> = ({statusText}) => {

    const defineColor = () => {
        switch (statusText) {
            case StatusTextTypes.STARTED:
                return 'primary'
            case StatusTextTypes.FINISHED:
                return 'success'
            case StatusTextTypes.NOT_STARTED_MISSED:
                return 'danger'
            case StatusTextTypes.NOT_STARTED_REQUIRED:
                return 'warning'
            default:
                return 'light'
        }
    }

    return (
        <Container>
            <Badge
                color={defineColor()}
            >
                {statusText}
            </Badge>
        </Container>
    )
}

export default TaskStatusBadge