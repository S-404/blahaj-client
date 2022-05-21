import React, {FC, useEffect} from 'react'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import TaskListItem from './taskListItem/TaskListItem'
import {useActions} from '../../../hooks/useActions'
import {useTaskList} from '../../../hooks/useTaskList'
import {FixedSizeList} from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

interface Row {
    index: number;
    style: {};
}

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

    const Row: FC<Row> = ({index, style}) => {
        const task = sortedFilteredTaskList[index]
        return (
            <div style={style}>
                <TaskListItem key={task.id} {...task}/>
            </div>
        )
    }

    if (!sortedFilteredTaskList.length) return (<i>List is Empty</i>)

    return (
        <AutoSizer>
            {({height, width}) => (
                <FixedSizeList
                    className="list-group"
                    height={height}
                    itemCount={sortedFilteredTaskList.length}
                    itemSize={41}
                    width={width}
                >
                    {Row}
                </FixedSizeList>
            )}
        </AutoSizer>
    )
}

export default TaskList