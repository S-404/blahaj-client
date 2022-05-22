import React, {FC, useEffect} from 'react'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import MyTeam from './MyTeam'
import NewTeamPanel from './newTeamPanel/NewTeamPanel'
import {Container, Spinner,Alert,ListGroup} from 'reactstrap'



const MyTeams: FC = () => {

    const {userParticipation, loading, error} = useTypedSelector(state => state.participation)

    const {fetchUserParticipation} = useActions()

    useEffect(() => {
        if (!userParticipation.length) {
            fetchUserParticipation()
        }
    }, [])


    return (
        <Container>

            {loading ? <Spinner/> : null}

            {error ? < Alert severity="error">{error}</Alert> : null}
            <NewTeamPanel/>
            <ListGroup numbered>
                {userParticipation.map(team => (
                    <MyTeam key={team.id} {...team} />
                ))}
            </ListGroup>

        </Container>

    )
}

export default MyTeams