import {Dispatch} from 'redux'
import {ModalsAction, ModalsActionTypes} from '../../types/modalsTypes'

export const setEditTeamModal = (value: boolean) => {
    return (dispatch: Dispatch<ModalsAction>) => {
        dispatch({type: ModalsActionTypes.SET_EDIT_TEAM_MODAL, value})
    }
}