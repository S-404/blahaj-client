import React, {FC} from 'react'
import {getDeadlineValue} from '../../helpers/deadline'
import {IPeriodicityValue} from '../../types/periodicityTypes'

interface TaskDeadLineProps {
    deadline: number;
    periodicity: IPeriodicityValue;
}

const TaskDeadline: FC<TaskDeadLineProps> = ({deadline, periodicity}) => {

    const deadlineValue = () => getDeadlineValue(deadline, periodicity)

    return (
        <div>
            {deadlineValue()}
        </div>
    )
}

export default TaskDeadline