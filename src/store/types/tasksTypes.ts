import {TasksResponse} from '../../services/types/tasksResponse'
import {TaskHrefsResponse} from '../../services/types/taskHrefsResponse'

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
    UPDATE_TASK = 'UPDATE_TASK',
}

export enum TaskHrefActionTypes{
    ADD_HREF = 'ADD_HREF',
    DELETE_HREF = 'DELETE_HREF',
    UPDATE_HREF = 'UPDATE_HREF',
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

interface RemoveTaskAction {
    type: TasksActionTypes.REMOVE_TASK;
    value: number;
}

interface UpdateTaskAction {
    type: TasksActionTypes.UPDATE_TASK;
    value: TasksResponse;
}


export interface AddHrefAction {
    type: TaskHrefActionTypes.ADD_HREF;
    value: TaskHrefsResponse;
}

export interface DeleteHrefAction {
    type: TaskHrefActionTypes.DELETE_HREF;
    value: TaskHrefsResponse;
}

export interface UpdateHrefAction {
    type: TaskHrefActionTypes.UPDATE_HREF;
    value: TaskHrefsResponse;
}


export type  TasksAction =
    | FetchTasksAction
    | FetchTasksSuccessAction
    | FetchTasksErrorAction
    | AddTaskAction
    | RemoveTaskAction
    | UpdateTaskAction
    | AddHrefAction
    | DeleteHrefAction
    | UpdateHrefAction