import {StatusText} from '../../../components/todos/types/statusTypes'

export interface TasksFiltersState {
    taskGroup: string;
    status: TaskFilterStatus;
}

export enum FilterAdditionalValues {
    ALL = 'All'
}

export type TaskFilterStatus = StatusText | FilterAdditionalValues.ALL

export enum TasksFiltersActionTypes {
    SET_TASK_GROUP_FILTER = 'SET_TASK_GROUP_FILTER',
    SET_STATUS_FILTER = 'SET_STATUS_FILTER',
}

interface SetTaskGroupAction {
    type: TasksFiltersActionTypes.SET_TASK_GROUP_FILTER;
    value: string;
}

interface SetStatusAction {
    type: TasksFiltersActionTypes.SET_STATUS_FILTER;
    value: TaskFilterStatus;
}

export type TaskFiltersAction = SetTaskGroupAction | SetStatusAction
