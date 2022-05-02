import React, {FC} from 'react'
import {UserParticipationResponse} from '../../services/types/teamsResponse'
import Chip from '@mui/material/Chip'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import {useActions} from '../../hooks/useActions'
import {Delete, Edit} from '@mui/icons-material'


const MyTeam: FC<UserParticipationResponse> = ({teamId, isAdmin, team}) => {

    const {leaveTeam} = useActions()

    const leaveTeamHandler = () => {
        if (window.confirm(`leave from '${team.name}' team`)) {
            leaveTeam(teamId)
        }
    }

    return (
        <ListItem>

            <ListItemText
                primary={team.name}
                secondary={team.description}
            />

            <Chip
                label={`Role: ${isAdmin ? 'Admin' : 'User'}`}
            />
            <Chip
                variant="outlined"
                label={`participants: ${team.participants.length}`}
            />

            <IconButton
                edge="end"
                aria-label="delete"
                onClick={leaveTeamHandler}
            >
                <Delete/>
            </IconButton>
            <IconButton
                edge="end"
                aria-label="delete"
            >
                <Edit/>
            </IconButton>


        </ListItem>
    )
}

export default MyTeam