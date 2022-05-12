import React, {FC} from 'react'
import {ListGroupItem} from 'reactstrap'
import {TaskHrefPropsTypes} from '../../types/taskHrefsTypes'


const TaskHrefsListItem:FC<TaskHrefPropsTypes> = ({href}) => {
    return (
        <ListGroupItem>
            {href.shortName}
        </ListGroupItem>
    )
}

export default TaskHrefsListItem