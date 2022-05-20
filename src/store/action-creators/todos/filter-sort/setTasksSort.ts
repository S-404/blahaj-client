import {Dispatch} from 'redux'
import {TaskSortAction, TasksSortActionTypes, TasksSortState} from '../../../types/todos/tasksSortTypes'

export const setTasksSort = (value: TasksSortState) => {
    return (dispatch: Dispatch<TaskSortAction>) => {
        dispatch({type: TasksSortActionTypes.SET_SORT_TASKS, value})
    }
}