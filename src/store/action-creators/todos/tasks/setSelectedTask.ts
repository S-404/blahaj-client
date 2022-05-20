import {Dispatch} from 'redux'
import {TasksResponse} from '../../../../services/types/tasksResponse'
import {SelectedTaskAction, SelectedTaskActionTypes} from '../../../types/todos/selectedTaskTypes'

export const setSelectedTask = (value: TasksResponse) => {
    return (dispatch: Dispatch<SelectedTaskAction>) => {
        dispatch({type: SelectedTaskActionTypes.SET_SELECTED_TASK, value})
    }
}