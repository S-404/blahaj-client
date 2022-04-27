import {Dispatch} from "redux"
import {NavAction, NavActionTypes} from '../../types/navTypes'

export const setIsOpenDrawer = (value: boolean) => {
    return (dispatch: Dispatch<NavAction>) => {
        dispatch({type: NavActionTypes.SET_IS_OPEN_DRAWER, value})
    }
}