import React, {FC, useEffect} from 'react'
import {Box, Container, Typography} from '@mui/material'
import LoginForm from '../components/loginForm/LoginForm'
import {useActions} from '../hooks/useActions'

const LoginPage: FC = () => {
    const {setSelectedPage} = useActions()
    useEffect(()=>{
        setSelectedPage('Login')
    },[])
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