import {Dispatch} from 'redux'
import { ModalsAction, ModalsActionTypes} from '../../types/modalsTypes'

export const setEditTaskModal = (value: boolean) => {
    return (dispatch: Dispatch<ModalsAction>) => {
        dispatch({type: ModalsActionTypes.SET_EDIT_TASK_MODAL, value})
    }
}