import {TaskHrefActionTypes, TasksAction, TasksActionTypes, TasksState} from '../../types/tasksTypes'
import {TasksResponse} from '../../../services/types/tasksResponse'

const tasksState: TasksState = {
    tasks: [],
    loading: false,
    error: null,
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
        case TasksActionTypes.REMOVE_TASK: {
            const newTasksArray = state.tasks.filter(task => task.id !== action.value)
            return {
                ...state, loading: false, error: null,
                tasks: [...newTasksArray]
            }
        }
        case TasksActionTypes.UPDATE_TASK: {
            const newTasksObj = [...state.tasks]
            const index = newTasksObj.findIndex(task => task.id === action.value.id)
            newTasksObj[index] = {...newTasksObj[index], ...action.value}
            return {
                ...state, loading: false, error: null,
                tasks: [...newTasksObj]
            }
        }

        case TaskHrefActionTypes.ADD_HREF: {
            const newTasksObj: TasksResponse[] = JSON.parse(JSON.stringify(state.tasks))
            const taskIndex = newTasksObj.findIndex(task => task.id === action.value.taskId)
            newTasksObj[taskIndex].taskHrefs.push(action.value)

            return {...state, tasks: [...newTasksObj]}
        }

        case TaskHrefActionTypes.DELETE_HREF: {
            const newTasksObj: TasksResponse[] = JSON.parse(JSON.stringify(state.tasks))
            const taskIndex = newTasksObj.findIndex(task => task.id === action.value.taskId)
            newTasksObj[taskIndex].taskHrefs = newTasksObj[taskIndex]
                .taskHrefs
                .filter(href => href.id !== action.value.id)

            return {...state, tasks: [...newTasksObj]}
        }
        case TaskHrefActionTypes.UPDATE_HREF: {
            const newTasksObj: TasksResponse[] = JSON.parse(JSON.stringify(state.tasks))
            const taskIndex = newTasksObj.findIndex(task => task.id === action.value.taskId)
            const hrefIndex = newTasksObj[taskIndex]
                .taskHrefs
                .findIndex(href => href.id === action.value.id)
            newTasksObj[taskIndex].taskHrefs[hrefIndex] = action.value

            return {...state, tasks: [...newTasksObj]}
        }

        default:
            return state
    }
}
