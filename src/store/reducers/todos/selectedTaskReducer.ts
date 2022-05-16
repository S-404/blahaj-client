import {SelectedTaskAction, SelectedTaskActionTypes, SelectedTaskState} from '../../types/selectedTaskTypes'
import {TasksResponse} from '../../../services/types/tasksResponse'
import {ITaskHref} from '../../../services/types/taskHrefsResponse'
import {TaskHrefActionTypes} from '../../types/tasksTypes'


const selectedTaskState: SelectedTaskState = {
    selectedTask: {} as TasksResponse,
    selectedTaskHref: {} as ITaskHref
}

export const selectedTaskReducer = (state = selectedTaskState, action: SelectedTaskAction): SelectedTaskState => {

    switch (action.type) {

        case SelectedTaskActionTypes.SET_SELECTED_TASK:
            return {...state, selectedTask: action.value}

        case SelectedTaskActionTypes.SET_SELECTED_HREF:
            return {...state, selectedTaskHref: action.value}


        case TaskHrefActionTypes.ADD_HREF: {
            const newTaskObj: TasksResponse = JSON.parse(JSON.stringify(state.selectedTask))
            newTaskObj.taskHrefs.push(action.value)

            return {...state, selectedTask: {...newTaskObj}}
        }

        case TaskHrefActionTypes.DELETE_HREF: {
            const newTasksObj: TasksResponse = JSON.parse(JSON.stringify(state.selectedTask))
            newTasksObj.taskHrefs = newTasksObj.taskHrefs.filter(href => href.id !== action.value.id)

            return {...state, selectedTask: {...newTasksObj}}
        }

        case TaskHrefActionTypes.UPDATE_HREF: {
            const newTasksObj: TasksResponse = JSON.parse(JSON.stringify(state.selectedTask))
            const hrefIndex = newTasksObj.taskHrefs.findIndex(href => href.id === action.value.id)
            newTasksObj.taskHrefs[hrefIndex] = action.value

            return {...state, selectedTask: {...newTasksObj}}
        }

        default:
            return state
    }
}
