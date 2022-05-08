import React, {FC, useEffect} from 'react'
import {useActions} from '../hooks/useActions'
import Profile from '../components/profile/Profile'
import {Container} from 'reactstrap'

const UserPage: FC = () => {

    const {setSelectedPage} = useActions()

    useEffect(()=>{
        setSelectedPage('Personal Page')
    },[])

    return (
        <Container>
            <Profile/>
        </Container>
    )
}

export default UserPage