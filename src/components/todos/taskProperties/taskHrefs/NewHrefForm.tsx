import React, {FC} from 'react'
import {Button, Form, FormGroup, Input, Label} from 'reactstrap'
import {useTypedSelector} from '../../../../hooks/useTypedSelector'
import {useActions} from '../../../../hooks/useActions'

const NewHrefForm: FC = () => {

    const {selected} = useTypedSelector(state => state.tasks)
    const {createHref} = useActions()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget)

        const href = String(data.get('taskHref') as FormDataEntryValue)
        const shortName = String(data.get('shortName') as FormDataEntryValue)
        const isMain = Boolean(data.get('isMain') as FormDataEntryValue)

        createHref({
            href,
            taskId: selected.id,
            shortName,
            isMain,
            teamId: selected.teamId
        })

    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Href</Label>
                <Input
                    name="taskHref"
                />
            </FormGroup>
            <FormGroup>
                <Label>Short Name</Label>
                <Input
                    name="shortName"
                    maxLength={50}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    id="isMain"
                    name="isMain"
                    type="checkbox"
                    className="m-1"
                />
                <Label htmlFor="isMain">is Main Link</Label>
            </FormGroup>
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

export default NewHrefForm