import {TasksAction, TasksActionTypes, TasksState} from '../types/tasksTypes'
import {TasksResponse} from '../../services/types/tasksResponse'

const tasksState: TasksState = {
    tasks: [],
    loading: false,
    error: null,
    selected: {} as TasksResponse,
}

export const tasksReducer = (state = tasksState, action: TasksAction): TasksState => {
    switch (action.type) {
        case TasksActionTypes.FETCH_TASKS:
            return {...state, loading: true, error: null}
        case TasksActionTypes.FETCH_TASKS_SUCCESS:
            return {...state, error: null, loading: false, tasks: action.value}
        case TasksActionTypes.FETCH_TASKS_ERROR:
            return {...state, loading: false, error: action.value}
        case TasksActionTypes.ADD_TASK:
            return {
                ...state, loading: false, error: null,
                tasks: [...state.tasks, action.value]
            }
        case TasksActionTypes.REMOVE_TASK:
            const newTasksArray = state.tasks.filter(task => task.id !== action.value)
            return {
                ...state, loading: false, error: null,
                tasks: [...newTasksArray]
            }

        case TasksActionTypes.UPDATE_TASK:
            const newTasksObj = [...state.tasks]
            const index = newTasksObj.findIndex(task => task.id === action.value.id)
            newTasksObj[index] = {...action.value}
            return {
                ...state, loading: false, error: null,
                tasks: [...newTasksObj]
            }

        case TasksActionTypes.SET_SELECTED_TASK:
            return {...state, selected: action.value}

        default:
            return state
    }
}

