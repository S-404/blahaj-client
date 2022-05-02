import {UserParticipationResponse} from '../../services/types/teamsResponse'

export interface UserParticipationState {
    userParticipation: UserParticipationResponse[];
    loading: boolean;
    error: null | string;
}

export enum UserParticipationActionTypes {
    FETCH_USER_PARTICIPATION = "FETCH_USER_PARTICIPATION",
    FETCH_USER_PARTICIPATION_SUCCESS = "FETCH_USER_PARTICIPATION_SUCCESS",
    FETCH_USER_PARTICIPATION_ERROR = "FETCH_USER_PARTICIPATION_ERROR",
    REMOVE_PARTICIPATION = 'REMOVE_PARTICIPATION',
}


interface FetchUserParticipationAction {
    type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION;
}

interface FetchUserParticipationSuccessAction {
    type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION_SUCCESS;
    value: UserParticipationResponse[];
}

interface FetchUserParticipationErrorAction {
    type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION_ERROR;
    value: string;
}


interface RemoveParticipationAction {
    type: UserParticipationActionTypes.REMOVE_PARTICIPATION;
    value: number;
}


export type  UserParticipationAction =
    | FetchUserParticipationAction
    | FetchUserParticipationSuccessAction
    | FetchUserParticipationErrorAction
    | RemoveParticipationAction