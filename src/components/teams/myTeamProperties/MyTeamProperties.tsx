import React, {FC, useEffect, useState} from 'react'
import {Container, Form, FormFeedback, FormGroup, Input, Label} from 'reactstrap'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {isValidName} from '../../../helpers/validations'
import MyTeamPropertiesButtons from './MyTeamPropertiesButtons'
import ParticipantList from '../participantList/ParticipantList'
import {useActions} from '../../../hooks/useActions'

const MyTeamProperties: FC = () => {

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [nameIsValid, setNameIsValid] = useState<boolean>(true)
    const {updateTeam, setEditTeamModal} = useActions()

    const {selectedTeam} = useTypedSelector(state => state.selectedTeam)

    useEffect(() => {
        if (selectedTeam) {
            setName(selectedTeam.name)
            setDescription(selectedTeam.description)
        }
    }, [])

    const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameIsValid(isValidName(e.target.value))
        setName(e.target.value)
    }

    const descriptionInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (name) {
            updateTeam({
                id: selectedTeam.id,
                name,
                description
            })
            setEditTeamModal(false)
        }


    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>

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

                <MyTeamPropertiesButtons/>

            </Form>

            <ParticipantList/>

        </Container>
    )
}

export default MyTeamProperties