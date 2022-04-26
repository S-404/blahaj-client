export interface NavState {
    selectedPage: string;
}

export enum NavActionTypes {
    SET_SELECTED_PAGE = "SET_SELECTED_PAGE",
}

interface SetNavAction {
    type: NavActionTypes.SET_SELECTED_PAGE;
    value: string;
}

export type  NavAction = SetNavAction