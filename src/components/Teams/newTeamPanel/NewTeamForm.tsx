import React, {FC, useState} from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {isValidName} from '../../../helpers/validations'
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import Modal from '@mui/material/Modal'

const style = {
    box: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'column',
        p: 4,
    },
}

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
            open={newTeamModal}
            onClose={() => setNewTeamModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style.box}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                    New Team
                </Typography>
                <TextField
                    error={!nameIsValid}
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    helperText={`Use Letters.`}
                    value={name}
                    onChange={nameInputHandler}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    sx={{mt: 2, mb: 2}}
                    value={description}
                    onChange={descriptionInputHandler}
                />
                <Button
                    color="success"
                    variant="contained"
                    onClick={applyButtonHandler}
                >
                    Apply
                </Button>
            </Box>
        </Modal>
    )
}

export default NewTeamForm