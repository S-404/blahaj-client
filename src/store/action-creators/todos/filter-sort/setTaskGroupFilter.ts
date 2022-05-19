import {Dispatch} from 'redux'
import {TaskFiltersAction, TasksFiltersActionTypes} from '../../../types/tasksFilterTypes'

export const setTaskGroupFilter = (value: string) => {
    return (dispatch: Dispatch<TaskFiltersAction>) => {
        dispatch({type: TasksFiltersActionTypes.SET_TASK_GROUP_FILTER, value})
    }
}