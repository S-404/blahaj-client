import React, {FC, useEffect} from 'react'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import TaskListItem from './taskListItem/TaskListItem'
import {useActions} from '../../../hooks/useActions'
import {ListGroup} from 'reactstrap'

const TaskList: FC = () => {

    const {tasks} = useTypedSelector(state => state.tasks)
    const {selectedTeam} = useTypedSelector(state => state.nav)

    const {fetchTasks} = useActions()

    useEffect(()=>{

        fetchTasks(selectedTeam.id)
    },[selectedTeam])


    return (
        <ListGroup>
            {tasks.map(task => (
                <TaskListItem key={task.id} {...task}/>
            ))}
        </ListGroup>
    )
}

export default TaskList