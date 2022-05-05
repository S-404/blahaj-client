import React, {FC, useEffect} from 'react'
import {useActions} from '../hooks/useActions'
import Profile from '../components/profile/Profile'
import {Container} from '@mui/material'

const UserPage: FC = () => {

    const {setSelectedPage} = useActions()

    useEffect(()=>{
        setSelectedPage('Personal Page')
    },[])

    return (
        <Container component="main" maxWidth="md" >
            <Profile/>
        </Container>
    )
}

export default UserPage