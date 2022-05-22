import {Dispatch} from 'redux'
import {ITeam} from '../../../services/types/teamsResponse'
import {SelectedTeamAction, SelectedTeamActionTypes} from '../../types/teams/selectedTeamTypes'

export const setSelectedTeam = (value: ITeam) => {
    return (dispatch: Dispatch<SelectedTeamAction>) => {
        dispatch({type: SelectedTeamActionTypes.SET_SELECTED_TEAM, value})
    }
}