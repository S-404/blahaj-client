export interface ModalsState {
    newTeamModal: boolean
}

export enum ModalsActionTypes {
    SET_NEW_TEAM_MODAL = "SET_NEW_TEAM_MODAL",
}

interface SetNewTeamModalAction {
    type: ModalsActionTypes.SET_NEW_TEAM_MODAL;
    value: boolean;
}

export type  ModalsAction = SetNewTeamModalAction