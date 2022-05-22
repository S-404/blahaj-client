import React, {FC} from 'react'
import TaskListFilter from './TaskListFilter'
import TaskListSort from './TaskListSort'
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem, Badge,
    ListGroup,
    ListGroupItem,
    UncontrolledAccordion
} from 'reactstrap'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {FilterAdditionalValues} from '../../../store/types/todos/tasksFilterTypes'

const TaskListHeader: FC = () => {

    const {taskGroup,status} = useTypedSelector(state => state.tasksFilter)

    return (
        <UncontrolledAccordion open="0">
            <AccordionItem>

                <AccordionHeader targetId="1">
                    <span className='me-2'>Filter / Sort</span>
                    {taskGroup? <Badge>{taskGroup}</Badge>:null}
                    {status!==FilterAdditionalValues.ALL? <Badge>{status}</Badge>:null}
                </AccordionHeader>

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