import {Dispatch} from 'redux'
import {ModalsAction, ModalsActionTypes} from '../../types/modalsTypes'

export const setNewTaskModal = (value: boolean) => {
    return (dispatch: Dispatch<ModalsAction>) => {
        dispatch({type: ModalsActionTypes.SET_NEW_TASK_MODAL, value})
    }
}