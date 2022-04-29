import {ModalsAction, ModalsActionTypes, ModalsState} from '../types/modalsTypes'

const modalsState: ModalsState = {
    newTeamModal: false
}

export const modalsReducer = (state = modalsState, action: ModalsAction): ModalsState => {
    switch (action.type) {
        case ModalsActionTypes.SET_NEW_TEAM_MODAL:
            return {...state, newTeamModal: action.value}
        default:
            return state
    }
}

