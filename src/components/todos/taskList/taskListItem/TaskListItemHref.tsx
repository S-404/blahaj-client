import React, {FC} from 'react'
import {Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap'
import {TaskHrefsResponse} from '../../../../services/types/taskHrefsResponse'

interface MainTaskHrefPropTypes {
    taskHrefs: TaskHrefsResponse[]
}

const TaskListItemHref: FC<MainTaskHrefPropTypes> = ({taskHrefs}) => {

    if (!taskHrefs?.length) return null

    if (taskHrefs?.length === 1) return (
        <div>
            <Button
                id={`taskHref_${taskHrefs[0].id}`}
                tag="a"
                href={taskHrefs[0].href}
                target="_blank"
                size="sm"
                outline
                color="primary"
            >
                link
            </Button>
        </div>
    )

    return (
        <UncontrolledDropdown>
            <DropdownToggle
                outline
                color="primary"
                caret
                size="sm"
            >
                Links
            </DropdownToggle>
            <DropdownMenu>
                {taskHrefs.map(taskHref => (
                    <DropdownItem
                        key={taskHref.id}
                        tag="a"
                        href={taskHref.href}
                        target={'_blank'}
                    >
                        {taskHref.shortName}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default TaskListItemHref