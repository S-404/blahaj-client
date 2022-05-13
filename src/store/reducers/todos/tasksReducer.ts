import {TasksAction, TasksActionTypes, TasksState} from '../../types/tasksTypes'
import {ITaskHref, TasksResponse} from '../../../services/types/tasksResponse'

const tasksState: TasksState = {
    tasks: [],
    loading: false,
    error: null,
    selectedTask: {} as TasksResponse,
    selectedTaskHref: {} as ITaskHref
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
        case TasksActionTypes.SET_SELECTED_TASK:
            return {...state, selectedTask: action.value}

        case TasksActionTypes.SET_SELECTED_HREF:
            return {...state, selectedTaskHref: action.value}

        case TasksActionTypes.ADD_HREF: {

            const taskIndex = state
                .tasks
                .findIndex(task => task.id === action.value.taskId)

            const newTasksObj: TasksResponse[] = JSON.parse(JSON.stringify(state.tasks))

            newTasksObj[taskIndex].taskHrefs.push(action.value)
            const newTasksHrefsObj = [...newTasksObj[taskIndex].taskHrefs]

            return {
                ...state,
                tasks: [...newTasksObj],
                selectedTask: {
                    ...state.selectedTask,
                    taskHrefs: [...newTasksHrefsObj]
                }
            }
        }

        case TasksActionTypes.DELETE_HREF: {

            const taskIndex = state
                .tasks
                .findIndex(task => task.id === action.value.taskId)
            const newTasksObj: TasksResponse[] = JSON.parse(JSON.stringify(state.tasks))

            newTasksObj[taskIndex].taskHrefs = newTasksObj[taskIndex]
                .taskHrefs
                .filter(href => href.id !== action.value.id)

            const newTasksHrefsObj = [...newTasksObj[taskIndex].taskHrefs]
            return {
                ...state,
                tasks: [...newTasksObj],
                selectedTask: {
                    ...state.selectedTask,
                    taskHrefs: [...newTasksHrefsObj]
                }
            }

        }
        case TasksActionTypes.UPDATE_HREF: {

            const taskIndex = state
                .tasks
                .findIndex(task => task.id === action.value.taskId)
            const newTasksObj: TasksResponse[] = JSON.parse(JSON.stringify(state.tasks))

            const hrefIndex = newTasksObj[taskIndex]
                .taskHrefs
                .findIndex(href => href.id === action.value.id)

            newTasksObj[taskIndex].taskHrefs[hrefIndex] = action.value
            const newTaskHrefsObj = [...newTasksObj[taskIndex].taskHrefs]

            return {
                ...state,
                tasks: [...newTasksObj],
                selectedTask: {
                    ...state.selectedTask,
                    taskHrefs: [...newTaskHrefsObj]
                }
            }
        }

        default:
            return state
    }
}
