import {
    UserParticipationAction,
    UserParticipationActionTypes,
    UserParticipationState
} from '../types/teams/userParticipationTypes'

const userParticipationState: UserParticipationState = {
    userParticipation: [],
    loading: false,
    error: null
}

export const userParticipationReducer = (
    state = userParticipationState,
    action: UserParticipationAction)
    : UserParticipationState => {
    switch (action.type) {
        case UserParticipationActionTypes.FETCH_USER_PARTICIPATION:
            return {...state, loading: true, error: null}
        case UserParticipationActionTypes.FETCH_USER_PARTICIPATION_SUCCESS:
            return {...state, error: null, loading: false, userParticipation: action.value}
        case UserParticipationActionTypes.FETCH_USER_PARTICIPATION_ERROR:
            return {...state, loading: false, error: action.value}
        case UserParticipationActionTypes.REMOVE_PARTICIPATION:
            const newParticipationArray = state
                .userParticipation
                .filter(team => team.teamId !== action.value)
            return {...state, loading: false, error: null, userParticipation: newParticipationArray}
        default:
            return state
    }
}

