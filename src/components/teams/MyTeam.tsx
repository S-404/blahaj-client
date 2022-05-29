import React, {FC} from 'react'
import {UserParticipationResponse} from '../../services/types/teamsResponse'
import {useActions} from '../../hooks/useActions'
import {Badge, Button, Label, ListGroupItem} from 'reactstrap'


const MyTeam: FC<UserParticipationResponse> = ({isAdmin, team}) => {

    const {setSelectedTeam, setEditTeamModal} = useActions()

    const propertiesButtonHandler = () => {
        setSelectedTeam(team)
        setEditTeamModal(true)
    }

    return (
        <ListGroupItem>
            <Label>{team.name}</Label>
            <p>{team.description}</p>
            <Badge color="primary">{`Role: ${isAdmin ? 'Admin' : 'User'}`}</Badge>
            <Badge color="secondary">{`participants: ${team.participants.length}`}</Badge>
            <Button
                outline
                color="secondary"
                size="sm"
                onClick={propertiesButtonHandler}
            >
                ...
            </Button>
        </ListGroupItem>
    )
}

export default MyTeam