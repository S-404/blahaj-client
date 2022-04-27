import {Dispatch} from "redux"
import {NavAction, NavActionTypes} from '../../types/navTypes'

export const setSelectedPage = (value: string) => {
    return (dispatch: Dispatch<NavAction>) => {
        dispatch({type: NavActionTypes.SET_SELECTED_PAGE, value})
    }
}