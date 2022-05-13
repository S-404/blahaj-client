import {Dispatch} from 'redux'
import {TasksResponse} from '../../../../services/types/tasksResponse'
import {TasksAction, TasksActionTypes} from '../../../types/tasksTypes'

export const setSelectedTask = (value: TasksResponse) => {
    return (dispatch: Dispatch<TasksAction>) => {
        dispatch({type: TasksActionTypes.SET_SELECTED_TASK, value})
    }
}