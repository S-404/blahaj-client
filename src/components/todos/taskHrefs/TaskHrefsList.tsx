import React, {FC} from 'react'
import {ListGroup} from 'reactstrap'
import TaskHrefsListItem from './TaskHrefsListItem'
import {TaskHrefsResponse} from '../../../services/types/taskHrefsResponse'

interface TaskHRefsListPropsTypes {
    hrefs: TaskHrefsResponse[]
}

const TaskHrefsList: FC<TaskHRefsListPropsTypes> = ({hrefs}) => {

    if (!hrefs?.length) return <div>empty list</div>

    return (
        <ListGroup>
            {hrefs.map(href => (
                <TaskHrefsListItem key={href.id} {...href}/>
            ))}
        </ListGroup>
    )
}

export default TaskHrefsList