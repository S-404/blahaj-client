import {SortOrderValues, TaskSortAction, TasksSortActionTypes, TasksSortState} from '../../types/todos/tasksSortTypes'


const tasksSortState: TasksSortState = {
    criteria: 'deadline',
    order: SortOrderValues.ASC
}

export const tasksSortReducer = (state = tasksSortState, action: TaskSortAction) => {
    switch (action.type) {
        case TasksSortActionTypes.SET_SORT_TASKS:
            return {...state, ...action.value}
        default:
            return state
    }
}