import React, {FC} from 'react'
import {Badge, Button, ListGroupItem} from 'reactstrap'
import {useActions} from '../../../hooks/useActions'
import {TaskHrefsResponse} from '../../../services/types/taskHrefsResponse'


const TaskHrefsListItem: FC<TaskHrefsResponse> = ({...href}) => {

    const {deleteHref, setSelectedHref, setEditTaskHrefModal} = useActions()

    const deleteHrefHandler = () => {
        if (window.confirm('remove href')) {
            deleteHref(href.id)
        }
    }

    const propertiesHrefHandler = () => {
        setSelectedHref(href)
        setEditTaskHrefModal(true)
    }

    return (
        <ListGroupItem>

            <Button
                outline
                color="primary"
                tag={'a'}
                target={'_blank'}
                href={href.href}
            >{href.shortName}</Button>

            {href.isMain ? <Badge>main</Badge> : null}

            <div className="float-end">

                <Button
                    size="sm"
                    outline
                    type="button"
                    onClick={propertiesHrefHandler}
                >...
                </Button>

                <Button
                    size="sm"
                    outline
                    color="danger"
                    type="button"
                    onClick={deleteHrefHandler}
                >delete
                </Button>

            </div>
        </ListGroupItem>
    )
}

export default TaskHrefsListItem