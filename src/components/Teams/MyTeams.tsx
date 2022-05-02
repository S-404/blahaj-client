import React, {FC, useEffect} from 'react'
import {useActions} from '../../hooks/useActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import MyTeam from './MyTeam'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import NewTeamPanel from './newTeamPanel/NewTeamPanel'
import List from '@mui/material/List'

const MyTeams: FC = () => {

    const {userParticipation, loading, error} = useTypedSelector(state => state.participation)

    const {fetchUserParticipation} = useActions()

    useEffect(() => {
        fetchUserParticipation()
    }, [])


    return (

        <Container>

            <Typography variant="h5">My Teams:</Typography>
            {loading ? <CircularProgress/> : null}

            {error ? < Alert severity="error">{error}</Alert> : null}
            <NewTeamPanel/>
            <List
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                }}
            >
                {userParticipation.map(team => (
                    <MyTeam key={team.id} {...team} />
                ))}
            </List>




        </Container>

    )
}

export default MyTeams