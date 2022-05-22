import React, {FC, useEffect} from 'react'
import {Container} from 'reactstrap'
import MyTeams from '../components/teams/MyTeams'
import {useActions} from '../hooks/useActions'

const TeamsPage:FC = () => {

    const {setSelectedPage} = useActions()

    useEffect(()=>{
        setSelectedPage('My Teams')
    },[])

    return (
        <Container>
            <MyTeams/>
        </Container>
    )
}

export default TeamsPage