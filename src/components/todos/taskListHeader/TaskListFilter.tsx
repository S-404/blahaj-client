import React, {FC} from 'react'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import MySelect from '../../UI/MySelect'
import {useTaskGroups} from '../../../hooks/useTaskGroups'
import {useActions} from '../../../hooks/useActions'
import {TaskFilterStatus} from '../../../store/types/todos/tasksFilterTypes'
import {useStatusFilterSelectOptions} from '../../../hooks/useStatusFilterSelectOptions'
import {Label} from 'reactstrap'

const TaskListFilter: FC = () => {

    const {tasks} = useTypedSelector(state => state.tasks)
    const {setTaskGroupFilter, setStatusFilter} = useActions()

    const taskGroupsOptions = useTaskGroups(tasks)
    const taskStatusOptions = useStatusFilterSelectOptions()

    const taskGroupFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskGroupFilter(e.target.value)
    }

    const taskStatusFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatusFilter(e.target.value as TaskFilterStatus)
    }


    return (
        <div className="d-flex flex-row">
            <div className="d-flex flex-row align-items-center">
                <Label className="text-nowrap m-1">Task Group</Label>
                <MySelect
                    name={'taskGroupFilter'}
                    options={taskGroupsOptions}
                    onChange={taskGroupFilterHandler}
                />
            </div>
            <div className="d-flex flex-row align-items-center">
                <Label className="text-nowrap m-1">Status</Label>
                <MySelect
                    name={'taskStatusFilter'}
                    options={taskStatusOptions}
                    onChange={taskStatusFilterHandler}
                />
            </div>
        </div>
    )
}

export default TaskListFilter