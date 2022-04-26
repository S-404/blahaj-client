import {NavAction, NavActionTypes, NavState} from "../types/navTypes"

const navState: NavState = {
    selectedPage: 'Home',
}

export const navReducer = (state = navState, action: NavAction): NavState => {
    switch (action.type) {
        case NavActionTypes.SET_SELECTED_PAGE:
            return {...state, selectedPage: action.value}
        default:
            return state
    }
}

