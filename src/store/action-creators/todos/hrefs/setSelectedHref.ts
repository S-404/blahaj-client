import {Dispatch} from 'redux'
import {TaskHrefsResponse} from '../../../../services/types/taskHrefsResponse'
import {SelectedTaskAction, SelectedTaskActionTypes} from '../../../types/selectedTaskTypes'

export const setSelectedHref = (value: TaskHrefsResponse) => {
    return (dispatch: Dispatch<SelectedTaskAction>) => {
        dispatch({type: SelectedTaskActionTypes.SET_SELECTED_HREF, value})
    }
}