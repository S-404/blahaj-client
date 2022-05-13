import React, {FC} from 'react'
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {Button, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap'
import DeadlineSelector from './DeadlineSelector'
import {IPeriodicityValues} from '../types/periodicityTypes'


const NewTaskForm: FC = () => {

    const {id: teamId} = useTypedSelector(state => state.nav.selectedTeam)
    const {createTask, setNewTaskModal} = useActions()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const name = String(data.get('taskName') as FormDataEntryValue)
        const taskGroup = String(data.get('taskGroup') as FormDataEntryValue)
        const deadline = Number(data.get('deadline') as FormDataEntryValue)
        const periodicity = Number(data.get('periodicity') as FormDataEntryValue)
        const description = String(data.get('description') as FormDataEntryValue)

        createTask({
            teamId,
            name,
            taskGroup,
            deadline,
            periodicity,
            description
        })

        setNewTaskModal(false)

    }


    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Task Name</Label>
                <Input name={'taskName'}/>
                <FormFeedback>
                    Use Letters and Spaces.
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label>Task Group</Label>
                <Input name={'taskGroup'}/>
            </FormGroup>

            <DeadlineSelector
                defaultDeadline={0}
                defaultPeriodicity={IPeriodicityValues.DAILY}
            />

            <FormGroup>
                <Label>Description</Label>
                <Input
                    type={'textarea'}
                    name={'description'}
                />
            </FormGroup>

            <Button type="submit" color="success">
                Apply
            </Button>
        </Form>
    )
}

export default NewTaskForm