import {ITeam} from '../../services/types/teamsResponse'

export interface NavState {
    selectedPage: string;
    isOpenDrawer: boolean;
    selectedTeam: ITeam;
}

export enum NavActionTypes {
    SET_SELECTED_PAGE = "SET_SELECTED_PAGE",
    SET_IS_OPEN_DRAWER = "SET_IS_OPEN_DRAWER",
    SET_SELECTED_TEAM = "SET_SELECTED_TEAM",
}

interface SetSelectedPageAction {
    type: NavActionTypes.SET_SELECTED_PAGE;
    value: string;
}

interface SetSelectedTeamAction {
    type: NavActionTypes.SET_SELECTED_TEAM;
    value: ITeam;
}

interface SetIsOpenAction {
    type: NavActionTypes.SET_IS_OPEN_DRAWER;
    value: boolean;
}


export type  NavAction = SetSelectedPageAction | SetIsOpenAction | SetSelectedTeamAction