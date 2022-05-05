import {TasksResponse} from '../../services/types/tasksResponse'

export interface TasksState {
    tasks: TasksResponse[];
    loading: boolean;
    error: null | string;
}

export enum TasksActionTypes {
    FETCH_TASKS = 'FETCH_TASKS',
    FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS',
    FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR',
}

interface FetchTasksAction {
    type: TasksActionTypes.FETCH_TASKS;
}

interface FetchTasksSuccessAction {
    type: TasksActionTypes.FETCH_TASKS_SUCCESS;
    value: TasksResponse[];
}

interface FetchTasksErrorAction {
    type: TasksActionTypes.FETCH_TASKS_ERROR;
    value: string;
}



export type  TasksAction =
    | FetchTasksAction
    | FetchTasksSuccessAction
    | FetchTasksErrorAction
