import React, {FC, useEffect} from 'react'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import MyTeam from './MyTeam'
import NewTeamPanel from './newTeamPanel/NewTeamPanel'
import {Container, Spinner, Alert, ListGroup} from 'reactstrap'
import MyModal from '../UI/MyModal'
import MyTeamProperties from './myTeamProperties/MyTeamProperties'


const MyTeams: FC = () => {

    const {userParticipation, loading, error} = useTypedSelector(state => state.participation)
    const {editTeamModal} = useTypedSelector(state => state.modals)
    const {fetchUserParticipation, setEditTeamModal} = useActions()

    useEffect(() => {
        if (!userParticipation.length) {
            fetchUserParticipation()
        }
    }, [])


    return (
        <Container>

            {loading ? <Spinner/> : null}

            <MyModal
                visible={editTeamModal}
                setVisible={setEditTeamModal}
                title={'Team Properties'}
                children={<MyTeamProperties/>}
            />

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