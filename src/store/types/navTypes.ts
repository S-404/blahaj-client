export interface NavState {
    selectedPage: string;
    isOpenDrawer: boolean;
}

export enum NavActionTypes {
    SET_SELECTED_PAGE = "SET_SELECTED_PAGE",
    SET_IS_OPEN_DRAWER = "SET_IS_OPEN_DRAWER",
}

interface SetSelectedPageAction {
    type: NavActionTypes.SET_SELECTED_PAGE;
    value: string;
}

interface SetIsOpenAction {
    type: NavActionTypes.SET_IS_OPEN_DRAWER;
    value: boolean;
}


export type  NavAction = SetSelectedPageAction | SetIsOpenAction