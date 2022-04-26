import React, {FC} from 'react'
import RegistrationForm from '../components/registrationForm/RegistrationForm'
import {Container} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


const RegistrationPage: FC = () => {

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign up to BLAHAJ
                </Typography>

                <RegistrationForm/>

            </Box>
        </Container>
    )
}

export default RegistrationPage