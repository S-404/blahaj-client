import {ITaskHref} from '../../../services/types/taskHrefsResponse'
import {TasksResponse} from '../../../services/types/tasksResponse'
import {AddHrefAction, DeleteHrefAction, UpdateHrefAction} from './tasksTypes'

export interface SelectedTaskState {
    selectedTask: TasksResponse;
    selectedTaskHref: ITaskHref;
}

export enum SelectedTaskActionTypes {
    SET_SELECTED_TASK = 'SET_SELECTED_TASK',
    SET_SELECTED_HREF = 'SET_SELECTED_HREF',
}

interface SetSelectedTaskAction {
    type: SelectedTaskActionTypes.SET_SELECTED_TASK;
    value: TasksResponse;
}

interface SetSelectedHrefAction {
    type: SelectedTaskActionTypes.SET_SELECTED_HREF;
    value: ITaskHref;
}



export type  SelectedTaskAction =
    | SetSelectedTaskAction
    | SetSelectedHrefAction
    | AddHrefAction
    | DeleteHrefAction
    | UpdateHrefAction