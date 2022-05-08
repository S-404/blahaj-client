import React, {FC, useState} from 'react'
import {isValidName} from '../../../helpers/validations'
import {useActions} from '../../../hooks/useActions'
import {Button, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap'


const NewTeamForm: FC = () => {

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [nameIsValid, setNameIsValid] = useState<boolean>(true)

    const {addTeam} = useActions()


    const applyButtonHandler = () => {
        if (isValidName(name)) {
            addTeam({name, description})
        }
    }

    const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameIsValid(isValidName(e.target.value))
        setName(e.target.value)
    }

    const descriptionInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }


    return (
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input
                    invalid={!nameIsValid}
                    value={name}
                    onChange={nameInputHandler}
                />
                <FormFeedback>
                    Use Letters.
                </FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label>Description</Label>
                <Input
                    type="textarea"
                    rows={4}
                    value={description}
                    onChange={descriptionInputHandler}
                />
                <FormFeedback>
                    Use Letters.
                </FormFeedback>
            </FormGroup>

            <Button
                color="success"
                type="submit"
                onClick={applyButtonHandler}
            >
                Apply
            </Button>
        </Form>
    )
}

export default NewTeamForm