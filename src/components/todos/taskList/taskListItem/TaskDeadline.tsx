import React, {FC} from 'react'
import {getDeadlineValue} from '../../helpers/deadline'
import {IPeriodicityValue} from '../../types/periodicityTypes'
import {Container} from 'reactstrap'

interface TaskDeadLineProps {
    deadline: number;
    periodicity: IPeriodicityValue;
}

const TaskDeadline: FC<TaskDeadLineProps> = ({deadline, periodicity}) => {

    const deadlineValue = () => getDeadlineValue(deadline, periodicity)

    return (
        <Container className='text-center'>
            {deadlineValue()}
        </Container>
    )
}

export default TaskDeadline