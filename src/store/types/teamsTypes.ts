import {ITeam} from "../../services/types/teamsResponseTypes"

export interface TeamsState {
    teams: ITeam[];
    loading: boolean;
    error: null | string;
}

export enum TeamsActionTypes {
    SET_TEAMS = "SET_TEAMS",
    FETCH_TEAMS = "FETCH_TEAMS",
    FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS",
    FETCH_TEAMS_ERROR = "FETCH_TEAMS_ERROR",
}

interface SetTeamsAction {
    type: TeamsActionTypes.SET_TEAMS;
    value: ITeam[];
}

interface FetchTeamsAction {
    type: TeamsActionTypes.FETCH_TEAMS;
}

interface FetchTeamsSuccessAction {
    type: TeamsActionTypes.FETCH_TEAMS_SUCCESS;
    value: ITeam[];
}

interface FetchTeamsErrorAction {
    type: TeamsActionTypes.FETCH_TEAMS_ERROR;
    value: string;
}


export type  TeamsAction =
    SetTeamsAction
    | FetchTeamsAction
    | FetchTeamsSuccessAction
    | FetchTeamsErrorAction