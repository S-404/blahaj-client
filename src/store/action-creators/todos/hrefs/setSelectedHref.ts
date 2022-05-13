import {Dispatch} from 'redux'
import {ITaskHref} from '../../../../services/types/tasksResponse'
import {TasksAction, TasksActionTypes} from '../../../types/tasksTypes'

export const setSelectedHref = (value: ITaskHref) => {
    return (dispatch: Dispatch<TasksAction>) => {
        dispatch({type: TasksActionTypes.SET_SELECTED_HREF, value})
    }
}