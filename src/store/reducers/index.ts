import {combineReducers} from "redux"
import {isAuthReducer} from "./authReducer"
import {navReducer} from './navReducer'
import {teamsReducer} from './teamsReducer'


export const rootReducer = combineReducers({
    auth: isAuthReducer,
    nav: navReducer,
    teams: teamsReducer
})

export type RootState = ReturnType<typeof rootReducer>