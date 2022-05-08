import React, {FC, useState} from 'react'
import {isValidName} from '../../../helpers/validations'
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {Button, Form, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from 'reactstrap'


const NewTeamForm: FC = () => {

    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [nameIsValid, setNameIsValid] = useState<boolean>(true)

    const {setNewTeamModal, addTeam} = useActions()
    const {newTeamModal} = useTypedSelector(state => state.modals)


    const applyButtonHandler = () => {
        if (isValidName(name)) {
            addTeam({name, description})
            setNewTeamModal(false)
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
        <Modal
            centered
            size="md"
            isOpen={newTeamModal}
            toggle={() => setNewTeamModal(false)}
        >
            <ModalHeader
                toggle={() => setNewTeamModal(false)}
            > New Team</ModalHeader>
            <ModalBody>
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
            </ModalBody>
        </Modal>
    )
}

export default NewTeamForm