export interface ModalsState {
    newTeamModal: boolean;
    deleteAlertModal: boolean
}

export enum ModalsActionTypes {
    SET_NEW_TEAM_MODAL = "SET_NEW_TEAM_MODAL",
    SET_DELETE_ALERT_MODAL = "SET_DELETE_ALERT_MODAL"
}

interface SetNewTeamModalAction {
    type: ModalsActionTypes.SET_NEW_TEAM_MODAL;
    value: boolean;
}
interface SetDeleteAlertModalAction {
    type: ModalsActionTypes.SET_DELETE_ALERT_MODAL;
    value: boolean;
}

export type  ModalsAction = SetNewTeamModalAction | SetDeleteAlertModalAction