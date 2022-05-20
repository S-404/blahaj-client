import React, {FC} from 'react'
import {useActions} from '../../../hooks/useActions'
import MySelect from '../../UI/MySelect'
import {SortOrderValue, SortOrderValues} from '../../../store/types/todos/tasksSortTypes'
import {TasksResponse} from '../../../services/types/tasksResponse'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {MySelectOption} from '../../UI/types/mySelectTypes'
import {useTasksSortSelectOptions} from '../../../hooks/useTasksSortSelectOptions'

const TaskListSort: FC = () => {

    const {setTasksSort} = useActions()
    const tasksSort = useTypedSelector(state => state.tasksSort)

    const taskSortCriteriaOptions = useTasksSortSelectOptions()

    const taskSortOrderOptions: MySelectOption[] = [
        {value: SortOrderValues.ASC, name: SortOrderValues.ASC},
        {value: SortOrderValues.DESC, name: SortOrderValues.DESC},
    ]

    const taskSortCriteriaSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTasksSort({
            ...tasksSort,
            criteria: e.target.value as keyof TasksResponse
        })
    }

    const taskSortOrderSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTasksSort({
            ...tasksSort,
            order: e.target.value as SortOrderValue
        })
    }

    return (
        <div>
            <MySelect
                name={'tasksSortCriteria'}
                options={taskSortCriteriaOptions}
                onChange={taskSortCriteriaSelectHandler}
            />
            <MySelect
                name={'tasksSortOrder'}
                options={taskSortOrderOptions}
                onChange={taskSortOrderSelectHandler}
            />
        </div>
    )
}

export default TaskListSort