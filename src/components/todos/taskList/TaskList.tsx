import React, {FC, useEffect} from 'react'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import TaskListItem from './taskListItem/TaskListItem'
import {useActions} from '../../../hooks/useActions'
import {ListGroup} from 'reactstrap'
import {useTaskList} from '../../../hooks/useTaskList'

const TaskList: FC = () => {

    const {tasks} = useTypedSelector(state => state.tasks)
    const {selectedTeam} = useTypedSelector(state => state.nav)
    const taskSort = useTypedSelector(state => state.tasksSort)
    const taskFilter = useTypedSelector(state => state.tasksFilter)
    const {fetchTasks} = useActions()

    useEffect(() => {
        fetchTasks(selectedTeam.id)
    }, [selectedTeam.id])

    const sortedFilteredTaskList = useTaskList(tasks, taskFilter, taskSort)

    return (
        <ListGroup>
            {sortedFilteredTaskList.map(task => (
                <TaskListItem key={task.id} {...task}/>
            ))}
        </ListGroup>
    )
}

export default TaskList