import {Dispatch} from 'redux'
import {TaskSortAction, TasksSortActionTypes, TasksSortTypes} from '../../../types/todos/tasksSortTypes'

export const setTasksSort = (value: TasksSortTypes) => {
    return (dispatch: Dispatch<TaskSortAction>) => {
        dispatch({type: TasksSortActionTypes.SET_SORT_TASKS, value})
    }
}