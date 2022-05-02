import {ITeam} from '../../services/types/teamsResponse'

export interface TeamsState {
    teams: ITeam[];
    loading: boolean;
    error: null | string;
}

export enum TeamsActionTypes {
    FETCH_TEAMS = 'FETCH_TEAMS',
    FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS',
    FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR',
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
    | FetchTeamsAction
    | FetchTeamsSuccessAction
    | FetchTeamsErrorAction
