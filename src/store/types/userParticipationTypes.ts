import {UserParticipationResponse} from '../../services/types/userParticipationResponse'

export interface UserParticipationState {
    userParticipation: UserParticipationResponse[];
    loading: boolean;
    error: null | string;
}

export enum UserParticipationActionTypes {
    SET_USER_PARTICIPATION = "SET_USER_PARTICIPATION",
    FETCH_USER_PARTICIPATION = "FETCH_USER_PARTICIPATION",
    FETCH_USER_PARTICIPATION_SUCCESS = "FETCH_USER_PARTICIPATION_SUCCESS",
    FETCH_USER_PARTICIPATION_ERROR = "FETCH_USER_PARTICIPATION_ERROR",
}

interface SetUserParticipationAction {
    type: UserParticipationActionTypes.SET_USER_PARTICIPATION;
    value: UserParticipationResponse[];
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


export type  UserParticipationAction =
    SetUserParticipationAction
    | FetchUserParticipationAction
    | FetchUserParticipationSuccessAction
    | FetchUserParticipationErrorAction