import {combineReducers} from "redux"
import {isAuthReducer} from "./authReducer"
import {navReducer} from './navReducer'
import {teamsReducer} from './teamsReducer'
import {userParticipationReducer} from './userParticipationReducer'
import {modalsReducer} from './modalsReducer'


export const rootReducer = combineReducers({
    auth: isAuthReducer,
    nav: navReducer,
    teams: teamsReducer,
    participation: userParticipationReducer,
    modals: modalsReducer,
})

export type RootState = ReturnType<typeof rootReducer>