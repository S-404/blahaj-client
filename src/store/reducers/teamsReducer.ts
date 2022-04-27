import {TeamsAction, TeamsActionTypes, TeamsState} from '../types/teamsTypes'

const teamsState: TeamsState = {
    teams: [],
    loading: false,
    error: null
}

export const teamsReducer = (state = teamsState, action: TeamsAction): TeamsState => {
    switch (action.type) {
        case TeamsActionTypes.SET_TEAMS:
            return {...state, teams: action.value}
        case TeamsActionTypes.FETCH_TEAMS:
            return {...state, loading: true, error: null, teams: []}
        case TeamsActionTypes.FETCH_TEAMS_SUCCESS:
            return {...state, error: null, loading: false, teams: action.value}
        case TeamsActionTypes.FETCH_TEAMS_ERROR:
            return {...state, loading: false, error: action.value, teams: []}
        default:
            return state
    }
}

