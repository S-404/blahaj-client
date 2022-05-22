export interface ModalsState {
    newTeamModal: boolean;
    editTeamModal: boolean;
    deleteAlertModal: boolean;
    newTaskModal: boolean;
    editTaskModal: boolean;
    newTaskHrefModal: boolean;
    editTaskHrefModal: boolean;
}

export enum ModalsActionTypes {
    SET_NEW_TEAM_MODAL = 'SET_NEW_TEAM_MODAL',
    SET_EDIT_TEAM_MODAL = 'SET_EDIT_TEAM_MODAL',
    SET_DELETE_ALERT_MODAL = 'SET_DELETE_ALERT_MODAL',
    SET_NEW_TASK_MODAL = 'SET_NEW_TASK_MODAL',
    SET_EDIT_TASK_MODAL = 'SET_EDIT_TASK_MODAL',
    SET_NEW_TASK_HREF_MODAL = 'SET_NEW_TASK_HREF_MODAL',
    SET_EDIT_TASK_HREF_MODAL = 'SET_EDIT_TASK_HREF_MODAL',
}

interface SetNewTeamModalAction {
    type: ModalsActionTypes.SET_NEW_TEAM_MODAL;
    value: boolean;
}

interface SetEditTeamModalAction {
    type: ModalsActionTypes.SET_EDIT_TEAM_MODAL;
    value: boolean;
}

interface SetDeleteAlertModalAction {
    type: ModalsActionTypes.SET_DELETE_ALERT_MODAL;
    value: boolean;
}

interface SetNewTaskModalAction {
    type: ModalsActionTypes.SET_NEW_TASK_MODAL;
    value: boolean;
}


interface SetEditTaskModalAction {
    type: ModalsActionTypes.SET_EDIT_TASK_MODAL;
    value: boolean;
}


interface SetNewTaskHrefModalAction {
    type: ModalsActionTypes.SET_NEW_TASK_HREF_MODAL;
    value: boolean;
}

interface SetEditTaskHrefModalAction {
    type: ModalsActionTypes.SET_EDIT_TASK_HREF_MODAL;
    value: boolean;
}


export type  ModalsAction =
    SetNewTeamModalAction
    | SetEditTeamModalAction
    | SetDeleteAlertModalAction
    | SetNewTaskModalAction
    | SetEditTaskModalAction
    | SetNewTaskHrefModalAction
    | SetEditTaskHrefModalAction