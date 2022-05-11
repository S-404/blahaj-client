import React, {FC} from 'react'
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {Button, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap'
import DeadlineSelector from './DeadlineSelector'
import {IPeriodicityValues} from '../types/periodicityTypes'


const NewTaskForm: FC = () => {

    const {id: teamId} = useTypedSelector(state => state.nav.selectedTeam)
    const {createTask} = useActions()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const name = data.get('taskName') || 'New Task'
        const taskGroup = data.get('taskGroup') || 'New Tasks'
        const deadline = data.get('deadline') || 1
        const periodicity = data.get('periodicity') || 0
        const description = data.get('description') || ''

        if (name) {
            createTask({
                teamId,
                name: name.toString(),
                taskGroup: taskGroup.toString(),
                deadline: +deadline,
                periodicity: +periodicity,
                description: description.toString()
            })
        }

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
            defaultDeadline={1}
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