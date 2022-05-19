import {Dispatch} from 'redux'
import {TaskHrefsResponse} from '../../../../services/types/taskHrefsResponse'
import {SelectedTaskAction, SelectedTaskActionTypes} from '../../../types/todos/selectedTaskTypes'

export const setSelectedHref = (value: TaskHrefsResponse) => {
    return (dispatch: Dispatch<SelectedTaskAction>) => {
        dispatch({type: SelectedTaskActionTypes.SET_SELECTED_HREF, value})
    }
}