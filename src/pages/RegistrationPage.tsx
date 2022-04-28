import React, {FC, useEffect} from 'react'
import RegistrationForm from '../components/registrationForm/RegistrationForm'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useActions} from '../hooks/useActions'


const RegistrationPage: FC = () => {

    const {setSelectedPage} = useActions()

    useEffect(()=>{
        setSelectedPage('Registration')
    },[])

    const boxStyles = {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return (
        <Container component="main" maxWidth="xs">

            <Box sx={boxStyles}>

                <Typography component="h1" variant="h5">
                    Sign up to BLAHAJ
                </Typography>

                <RegistrationForm/>

            </Box>

        </Container>
    )
}

export default RegistrationPage