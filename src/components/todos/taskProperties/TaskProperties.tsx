import React, {FC, useState} from 'react'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {TasksResponse} from '../../../services/types/tasksResponse'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import DeadlineSelector from '../newTaskForm/DeadlineSelector'
import {useActions} from '../../../hooks/useActions'
import TaskHrefs from './taskHrefs/TaskHrefs'

const TaskProperties: FC = () => {

    const {updateTaskInfo, setEditTaskModal, removeTask} = useActions()
    const {selected} = useTypedSelector(state => state.tasks)
    const [task, setTask] = useState<TasksResponse>(selected)

    const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task, name: e.target.value})
    }

    const inputGroupHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task, taskGroup: e.target.value})
    }

    const inputDescriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task, description: e.target.value})
    }

    const inputNoteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({...task, note: e.target.value})
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)

        const taskObj: TasksResponse = {...task}

        taskObj.periodicity = Number(data.get('periodicity') as FormDataEntryValue)
        taskObj.deadline =  Number(data.get('deadline') as FormDataEntryValue)

        updateTaskInfo(taskObj)
        setEditTaskModal(false)
    }

    const removeTaskHandler = () => {
        if (window.confirm(`remove task: '${task.name}' `)) {
            removeTask(task.id)
            setEditTaskModal(false)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Task Name</Label>
                <Input
                    value={task.name}
                    onChange={inputNameHandler}
                    name={'taskName'}
                />
            </FormGroup>

            <FormGroup>
                <Label>Task Group</Label>
                <Input
                    value={task.taskGroup}
                    onChange={inputGroupHandler}
                    name={'taskGroup'}
                    maxLength={50}
                />
            </FormGroup>

            <DeadlineSelector
                defaultDeadline={task.deadline}
                defaultPeriodicity={task.periodicity}
            />

            <FormGroup>
                <Label>Description</Label>
                <Input
                    value={task.description}
                    onChange={inputDescriptionHandler}
                    type={'textarea'}
                    rows={task.description ? 4 : 1}
                    name={'description'}
                />
            </FormGroup>

            <FormGroup>
                <Label>Note</Label>
                <Input
                    value={task.note}
                    onChange={inputNoteHandler}
                    type={'textarea'}
                    rows={task.note ? 4 : 1}
                    name={'note'}
                />
            </FormGroup>

            <TaskHrefs/>

            <Button type="submit" color="success">
                Apply
            </Button>

            <Button
                color="danger"
                type="button"
                outline
                onClick={removeTaskHandler}
            >
                Remove
            </Button>
        </Form>
    )
}

export default TaskProperties