import React, {FC} from 'react'
import {Button, Form} from 'reactstrap'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {useActions} from '../../../hooks/useActions'
import HrefInputs from './HrefInputs'
import {taskHrefFormDataEntryValues} from '../helpers/taskHrefFormDataEntryValues'

const EditHrefForm: FC = () => {

    const {selectedTask, selectedTaskHref} = useTypedSelector(state => state.tasks)
    const {updateHref,setEditTaskHrefModal} = useActions()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()

        const {href, shortName} = taskHrefFormDataEntryValues(event)

        updateHref({
            id: selectedTaskHref.id,
            teamId: selectedTask.teamId,
            taskId: selectedTask.id,
            href,
            shortName,
        })

        setEditTaskHrefModal(false)

    }

    return (
        <Form onSubmit={handleSubmit}>

            <HrefInputs {...selectedTaskHref}/>

            <Button
                block
                color="success"
                type="submit"
            >
                Apply
            </Button>
        </Form>
    )
}

export default EditHrefForm