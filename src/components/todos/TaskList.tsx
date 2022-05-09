import React, {FC, useEffect} from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import TaskListItem from './TaskListItem'
import {useActions} from '../../hooks/useActions'

const TaskList: FC = () => {

    const {tasks} = useTypedSelector(state => state.tasks)
    const {selectedTeam} = useTypedSelector(state => state.nav)

    const {fetchTasks} = useActions()

    useEffect(()=>{

        fetchTasks(selectedTeam.id)
    },[selectedTeam])


    return (
        <div>
            {tasks.map(task => (
                <TaskListItem key={task.id} {...task}/>
            ))}
        </div>
    )
}

export default TaskList