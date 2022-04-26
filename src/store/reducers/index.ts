import {combineReducers} from "redux"
import {isAuthReducer} from "./authReducer"
import {navReducer} from './navReducer'


export const rootReducer = combineReducers({
    auth: isAuthReducer,
    nav: navReducer
})

export type RootState = ReturnType<typeof rootReducer>