import {SelectedTeamAction, SelectedTeamActionTypes, SelectedTeamState} from '../../types/teams/selectedTeamTypes'
import {ITeam} from '../../../services/types/teamsResponse'


const selectedTeamState: SelectedTeamState = {
    selectedTeam: {} as ITeam
}

export const selectedTeamReducer = (state = selectedTeamState, action: SelectedTeamAction): SelectedTeamState => {
    switch (action.type) {
        case SelectedTeamActionTypes.SET_SELECTED_TEAM:
            return {...state, selectedTeam: action.value}
        default:
            return state
    }
}