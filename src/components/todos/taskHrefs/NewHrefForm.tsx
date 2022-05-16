import React, {FC} from 'react'
import {Button, Form} from 'reactstrap'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {useActions} from '../../../hooks/useActions'
import HrefInputs from './HrefInputs'
import {taskHrefFormDataEntryValues} from '../helpers/taskHrefFormDataEntryValues'

const NewHrefForm: FC = () => {

    const {selectedTask} = useTypedSelector(state => state.selectedTask)
    const {createHref, setNewTaskHrefModal} = useActions()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.stopPropagation()

        const {href, shortName} = taskHrefFormDataEntryValues(event)

        createHref({
            teamId: selectedTask.teamId,
            taskId: selectedTask.id,
            href,
            shortName
        })

        setNewTaskHrefModal(false)

    }

    return (
        <Form
            id="NewHrefForm"
            name="NewHrefForm"
            onSubmit={handleSubmit}
        >
            <HrefInputs
                href={''}
                shortName={''}
            />

            <Button
                block
                color="success"
                type="submit"
                form="NewHrefForm"
            >
                Apply
            </Button>
        </Form>
    )
}

export default NewHrefForm