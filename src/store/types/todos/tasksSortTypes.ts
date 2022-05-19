import {TasksResponse} from '../../../services/types/tasksResponse'

export interface TasksSortState {
    tasksSort: TasksSortTypes
}

export interface TasksSortTypes {
    criteria: keyof TasksResponse;
    order: SortOrderValue;
}

export enum SortOrderValues {
    ASC = 'Asc',
    DESC = 'Desc'
}

export type SortOrderValue = SortOrderValues.ASC | SortOrderValues.DESC

export enum TasksSortActionTypes {
    SET_SORT_TASKS = 'SET_SORT_TASKS',
}

interface SetSortTasksAction {
    type: TasksSortActionTypes.SET_SORT_TASKS;
    value: TasksSortTypes;
}

export type TaskSortAction = SetSortTasksAction
