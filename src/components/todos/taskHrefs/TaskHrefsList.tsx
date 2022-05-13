import React, {FC} from 'react'
import {ListGroup} from 'reactstrap'
import TaskHrefsListItem from './TaskHrefsListItem'
import {TaskHrefsPropsTypes} from '../types/taskHrefsTypes'

const TaskHrefsList:FC<TaskHrefsPropsTypes> = ({hrefs}) => {

    if(!hrefs?.length) return <div>empty list</div>

    return (
        <ListGroup>
            {hrefs.map(href=>(
                <TaskHrefsListItem key={href.id} href={href}/>
            ))}
        </ListGroup>
    )
}

export default TaskHrefsList