import {Dispatch} from 'redux'
import {TasksAction, TasksActionTypes} from '../../../types/tasksTypes'
import {TaskHrefsResponse} from '../../../../services/types/taskHrefsResponse'

export const setSelectedHref = (value: TaskHrefsResponse) => {
    return (dispatch: Dispatch<TasksAction>) => {
        dispatch({type: TasksActionTypes.SET_SELECTED_HREF, value})
    }
}