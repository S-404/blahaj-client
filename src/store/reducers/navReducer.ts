import {NavAction, NavActionTypes, NavState} from '../types/navTypes'
import {ITeam} from '../../services/types/teamsResponse'

const navState: NavState = {
    selectedPage: 'Home',
    isOpenDrawer: false,
    selectedNavTeam: {} as ITeam,
}

export const navReducer = (state = navState, action: NavAction): NavState => {
    switch (action.type) {
        case NavActionTypes.SET_SELECTED_PAGE:
            return {...state, selectedPage: action.value}
        case NavActionTypes.SET_IS_OPEN_DRAWER:
            return {...state, isOpenDrawer: action.value}
        case NavActionTypes.SET_SELECTED_NAV_TEAM:
            return {...state, selectedNavTeam: action.value}
        default:
            return state
    }
}

