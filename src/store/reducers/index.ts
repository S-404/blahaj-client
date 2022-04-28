import {combineReducers} from "redux"
import {isAuthReducer} from "./authReducer"
import {navReducer} from './navReducer'
import {teamsReducer} from './teamsReducer'
import {userParticipationReducer} from './userParticipationReducer'


export const rootReducer = combineReducers({
    auth: isAuthReducer,
    nav: navReducer,
    teams: teamsReducer,
    participation: userParticipationReducer,
})

export type RootState = ReturnType<typeof rootReducer>