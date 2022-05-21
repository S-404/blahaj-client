import React, {FC} from 'react'
import TaskListFilter from './TaskListFilter'
import TaskListSort from './TaskListSort'
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    ListGroup,
    ListGroupItem,
    UncontrolledAccordion
} from 'reactstrap'

const TaskListHeader: FC = () => {
    return (
        <UncontrolledAccordion open="0">
            <AccordionItem>

                <AccordionHeader targetId="1"> Filter / Sort </AccordionHeader>

                <AccordionBody accordionId="1">
                    <ListGroup>

                        <ListGroupItem>
                            <TaskListFilter/>
                        </ListGroupItem>

                        <ListGroupItem>
                            <TaskListSort/>
                        </ListGroupItem>

                    </ListGroup>
                </AccordionBody>

            </AccordionItem>
        </UncontrolledAccordion>
    )
}

export default TaskListHeader