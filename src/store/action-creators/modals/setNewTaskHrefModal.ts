import {Dispatch} from 'redux'
import {ModalsAction, ModalsActionTypes} from '../../types/modalsTypes'

export const setNewTaskHrefModal = (value: boolean) => {
    return (dispatch: Dispatch<ModalsAction>) => {
        dispatch({type: ModalsActionTypes.SET_NEW_TASK_HREF_MODAL, value})
    }
}