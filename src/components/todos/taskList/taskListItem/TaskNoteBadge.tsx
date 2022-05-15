import React, {FC} from 'react'
import {Badge, UncontrolledTooltip} from 'reactstrap'

interface TaskNoteBadgePropsTypes {
    id: number;
    note: string;
}

const TaskNoteBadge: FC<TaskNoteBadgePropsTypes> = ({note, id}) => {

    if (!note) return null

    return (
        <div>
            <Badge
                id={`taskNote${id}`}
                color="warning"
                pill
            >
                !
            </Badge>
            <UncontrolledTooltip
                flip
                target={`taskNote${id}`}
            >
                {note}
            </UncontrolledTooltip>
        </div>

    )
}

export default TaskNoteBadge