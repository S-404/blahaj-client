import React, {FC} from 'react'
import {Badge, ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap'
import {IParticipant} from '../../../services/types/teamsResponse'

interface ParticipantListItemProps {
    participant: IParticipant;
}

const ParticipantListItem: FC<ParticipantListItemProps> = ({participant}) => {

    return (
        <ListGroupItem>
            <ListGroupItemHeading>
                {participant.user.username}
                <Badge>
                    {participant.isAdmin ? 'Admin' : 'User'}
                </Badge>
            </ListGroupItemHeading>
            <ListGroupItemText>
                {participant.user.job}
            </ListGroupItemText>
        </ListGroupItem>
    )
}

export default ParticipantListItem