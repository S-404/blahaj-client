import React, {FC, useMemo} from 'react'
import { TasksResponse} from '../../../../services/types/tasksResponse'
import {Button, Tooltip} from 'reactstrap'
import {TaskHrefsResponse} from '../../../../services/types/taskHrefsResponse'

const MainTaskHref: FC<TasksResponse> = ({...task}) => {

    const mainHref: TaskHrefsResponse = useMemo(() => {
        if (task?.taskHrefs?.length) {

            const index = task.taskHrefs.findIndex(href => href.isMain)
            return task.taskHrefs[index]
        }
        return {} as TaskHrefsResponse
    }, [task.taskHrefs])


    if (!mainHref?.isMain) return null

    return (
        <div>
            <Button
                id={`taskHref_${mainHref.id}`}
                tag={'a'}
                href={mainHref.href}
                target={'_blank'}
                size={'sm'}
            >
                link
            </Button>
            <Tooltip target={`taskHref_${mainHref.id}`}>
                {mainHref.shortName}
            </Tooltip>


        </div>
    )
}

export default MainTaskHref