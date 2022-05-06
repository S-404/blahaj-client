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
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
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

interface AddTaskAction {
    type: TasksActionTypes.ADD_TASK;
    value: TasksResponse;
}

interface removeTaskAction {
    type: TasksActionTypes.REMOVE_TASK;
    value: number;
}


export type  TasksAction =
    | FetchTasksAction
    | FetchTasksSuccessAction
    | FetchTasksErrorAction
    | AddTaskAction
    | removeTaskAction
