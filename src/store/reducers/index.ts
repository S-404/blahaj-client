import {combineReducers} from 'redux'
import {isAuthReducer} from './authReducer'
import {navReducer} from './navReducer'
import {teamsReducer} from './teams/teamsReducer'
import {userParticipationReducer} from './teams/userParticipationReducer'
import {modalsReducer} from './modalsReducer'
import {tasksReducer} from './todos/tasksReducer'
import {selectedTaskReducer} from './todos/selectedTaskReducer'
import {tasksFilterReducer} from './todos/tasksFilterReducer'


export const rootReducer = combineReducers({
    auth: isAuthReducer,
    nav: navReducer,
    teams: teamsReducer,
    participation: userParticipationReducer,
    modals: modalsReducer,
    tasks: tasksReducer,
    selectedTask: selectedTaskReducer,
    tasksFilter: tasksFilterReducer,
})

export type RootState = ReturnType<typeof rootReducer>