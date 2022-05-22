import {ITeam} from '../../../services/types/teamsResponse'

export interface SelectedTeamState {
    selectedTeam: ITeam;
}

export enum SelectedTeamActionTypes {
    SET_SELECTED_TEAM = 'SET_SELECTED_TEAM'
}

interface SetSelectedTeamAction {
    type: SelectedTeamActionTypes.SET_SELECTED_TEAM;
    value: ITeam;
}

export type  SelectedTeamAction = SetSelectedTeamAction

