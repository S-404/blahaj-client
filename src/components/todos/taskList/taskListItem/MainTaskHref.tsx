import React, {FC, useMemo} from 'react'
import {ITaskHrefs} from '../../../../services/types/tasksResponse'
import {Button, Tooltip} from 'reactstrap'
import {TaskHrefsPropsTypes} from '../../types/taskHrefsTypes'

const MainTaskHref: FC<TaskHrefsPropsTypes> = ({hrefs}) => {

    const mainHref: ITaskHrefs = useMemo(() => {
        if (hrefs?.length) {
            const index = hrefs.findIndex(href => href.isMain)
            return hrefs[index]
        }
        return {} as ITaskHrefs
    }, [hrefs])

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