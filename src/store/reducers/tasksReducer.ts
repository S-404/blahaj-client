import {TasksAction, TasksActionTypes, TasksState} from '../types/tasksTypes'

const tasksState: TasksState = {
    tasks: [],
    loading: false,
    error: null
}

export const tasksReducer = (state = tasksState, action: TasksAction): TasksState => {
    switch (action.type) {
        case TasksActionTypes.FETCH_TASKS:
            return {...state, loading: true, error: null}
        case TasksActionTypes.FETCH_TASKS_SUCCESS:
            return {...state, error: null, loading: false, tasks: action.value}
        case TasksActionTypes.FETCH_TASKS_ERROR:
            return {...state, loading: false, error: action.value}
        default:
            return state
    }
}

