import React, {FC} from 'react'
import {Container,Box,Typography} from '@mui/material'
import LoginForm from '../components/loginForm/LoginForm'

const LoginPage: FC = () => {

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
                    Sign in to BLAHAJ
                </Typography>

                <LoginForm/>

            </Box>
        </Container>
    )
}

export default LoginPage