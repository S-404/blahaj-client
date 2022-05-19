import {
    FilterAdditionalValues,
    TaskFiltersAction,
    TasksFiltersActionTypes,
    TasksFiltersState
} from '../../types/tasksFilterTypes'

const tasksFiltersState: TasksFiltersState = {
    taskGroup: '',
    status: FilterAdditionalValues.ALL,
}

export const tasksFilterReducer = (state = tasksFiltersState, action: TaskFiltersAction) => {
    switch (action.type) {
        case TasksFiltersActionTypes.SET_STATUS_FILTER:
            return {...state, status: action.value}
        case TasksFiltersActionTypes.SET_TASK_GROUP_FILTER:
            return {...state, taskGroup: action.value}
        default:
            return state
    }
}