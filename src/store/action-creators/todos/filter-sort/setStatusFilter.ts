import {Dispatch} from 'redux'
import {TaskFiltersAction, TaskFilterStatus, TasksFiltersActionTypes} from '../../../types/todos/tasksFilterTypes'

export const setStatusFilter = (value: TaskFilterStatus) => {
    return (dispatch: Dispatch<TaskFiltersAction>) => {
        dispatch({type: TasksFiltersActionTypes.SET_STATUS_FILTER, value})
    }
}