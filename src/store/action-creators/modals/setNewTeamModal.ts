import {Dispatch} from 'redux'
import {ModalsAction, ModalsActionTypes} from '../../types/modalsTypes'

export const setNewTeamModal = (value: boolean) => {
    return (dispatch: Dispatch<ModalsAction>) => {
        dispatch({type: ModalsActionTypes.SET_NEW_TEAM_MODAL, value})
    }
}