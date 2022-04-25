import {combineReducers} from "redux"
import {isAuthReducer} from "./authReducer"


export const rootReducer = combineReducers({
    auth: isAuthReducer,
})

export type RootState = ReturnType<typeof rootReducer>