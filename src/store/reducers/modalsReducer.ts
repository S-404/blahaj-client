import {ModalsAction, ModalsActionTypes, ModalsState} from '../types/modalsTypes'

const modalsState: ModalsState = {
    newTeamModal: false,
    editTeamModal: false,
    deleteAlertModal: false,
    newTaskModal: false,
    editTaskModal: false,
    newTaskHrefModal: false,
    editTaskHrefModal: false,
}

export const modalsReducer = (state = modalsState, action: ModalsAction): ModalsState => {
    switch (action.type) {
        case ModalsActionTypes.SET_NEW_TEAM_MODAL:
            return {...state, newTeamModal: action.value}
        case ModalsActionTypes.SET_EDIT_TEAM_MODAL:
            return {...state, editTeamModal: action.value}
        case ModalsActionTypes.SET_DELETE_ALERT_MODAL:
            return {...state, deleteAlertModal: action.value}
        case ModalsActionTypes.SET_NEW_TASK_MODAL:
            return {...state, newTaskModal: action.value}
        case ModalsActionTypes.SET_EDIT_TASK_MODAL:
            return {...state, editTaskModal: action.value}
        case ModalsActionTypes.SET_NEW_TASK_HREF_MODAL:
            return {...state, newTaskHrefModal: action.value}
        case ModalsActionTypes.SET_EDIT_TASK_HREF_MODAL:
            return {...state, editTaskHrefModal: action.value}
        default:
            return state
    }
}

