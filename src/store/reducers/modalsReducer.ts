import {ModalsAction, ModalsActionTypes, ModalsState} from '../types/modalsTypes'

const modalsState: ModalsState = {
    newTeamModal: false,
    deleteAlertModal: false,
    newTaskModal: false,
}

export const modalsReducer = (state = modalsState, action: ModalsAction): ModalsState => {
    switch (action.type) {
        case ModalsActionTypes.SET_NEW_TEAM_MODAL:
            return {...state, newTeamModal: action.value}
        case ModalsActionTypes.SET_DELETE_ALERT_MODAL:
            return {...state, deleteAlertModal: action.value}
        case ModalsActionTypes.SET_NEW_TASK_MODAL:
            return {...state, newTaskModal: action.value}
        default:
            return state
    }
}

