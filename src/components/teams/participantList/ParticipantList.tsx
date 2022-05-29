import React, {FC} from 'react'
import {AccordionBody, AccordionHeader, AccordionItem, Badge, ListGroup, UncontrolledAccordion} from 'reactstrap'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import ParticipantListItem from './ParticipantListItem'

const ParticipantList: FC = () => {

    const {selectedTeam} = useTypedSelector(state => state.selectedTeam)

    return (
        <UncontrolledAccordion open={'0'}>
            <AccordionItem>
                <AccordionHeader targetId={'1'}>
                    Participants
                    <Badge className="ms-2" pill>
                        {selectedTeam.participants.length}
                    </Badge>
                </AccordionHeader>
                <AccordionBody accordionId={'1'}>
                    <ListGroup>
                        {selectedTeam.participants.map(participant => (
                            <ParticipantListItem
                                key={participant.id}
                                participant={participant}
                            />
                        ))}
                    </ListGroup>
                </AccordionBody>
            </AccordionItem>
        </UncontrolledAccordion>
    )
}

export default ParticipantList