import {
    UserParticipationAction,
    UserParticipationActionTypes,
    UserParticipationState
} from '../types/userParticipationTypes'

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
        case UserParticipationActionTypes.SET_USER_PARTICIPATION:
            return {...state, userParticipation: action.value}
        case UserParticipationActionTypes.FETCH_USER_PARTICIPATION:
            return {...state, loading: true, error: null, userParticipation: []}
        case UserParticipationActionTypes.FETCH_USER_PARTICIPATION_SUCCESS:
            return {...state, error: null, loading: false, userParticipation: action.value}
        case UserParticipationActionTypes.FETCH_USER_PARTICIPATION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.value,
                userParticipation: []
            }
        default:
            return state
    }
}

