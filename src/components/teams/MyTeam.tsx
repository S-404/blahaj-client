import React, {FC} from 'react'
import {UserParticipationResponse} from '../../services/types/teamsResponse'
import {useActions} from '../../hooks/useActions'
import {Badge, Button, Label, ListGroupItem} from 'reactstrap'


const MyTeam: FC<UserParticipationResponse> = ({teamId, isAdmin, team}) => {

    const {leaveTeam} = useActions()

    const leaveTeamHandler = () => {
        if (window.confirm(`leave from '${team.name}' team`)) {
            leaveTeam(teamId)
        }
    }

    return (
        <ListGroupItem>
            <Label>{team.name}</Label>
            <p>{team.description}</p>
            <Badge color="primary">{`Role: ${isAdmin ? 'Admin' : 'User'}`}</Badge>
            <Badge color="secondary">{`participants: ${team.participants.length}`}</Badge>
            <Button
                outline
                color="danger"
                size='sm'
                onClick={leaveTeamHandler}
            >
                Leave
            </Button>
            <Button
                outline
                color="secondary"
                size='sm'
            >
                Edit
            </Button>
        </ListGroupItem>
    )
}

export default MyTeam