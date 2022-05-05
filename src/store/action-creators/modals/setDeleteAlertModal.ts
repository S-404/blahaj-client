import {Dispatch} from 'redux'
import {ModalsAction, ModalsActionTypes} from '../../types/modalsTypes'

export const setDeleteAlertModal = (value: boolean) => {
    return (dispatch: Dispatch<ModalsAction>) => {
        dispatch({type: ModalsActionTypes.SET_DELETE_ALERT_MODAL, value})
    }
}