import {Dispatch} from 'redux'
import {NavAction, NavActionTypes} from '../../types/navTypes'
import {ITeam} from '../../../services/types/teamsResponse'

export const setSelectedTeam = (value: ITeam) => {
    return (dispatch: Dispatch<NavAction>) => {
        dispatch({type: NavActionTypes.SET_SELECTED_TEAM, value})
    }
}