import {StatusAction} from '../../components/todos/types/statusTypes'
import {TaskHrefsResponse} from './taskHrefsResponse'

export interface ITask {
    id?: number;
    teamId: number;
    name: string;
    periodicity: number;
    deadline: number;
    taskGroup: string;
    description: string;
}

export interface TasksResponse extends ITask {
    id: number;
    note: string;
    updatedBy: string;
    startedAt: Date;
    finishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    taskHrefs: TaskHrefsResponse[];
}


export interface UpdateStatusPropsTypes {
    id: number;
    mode: StatusAction;
}

export interface UpdateStatusDataTypes {
    id: number;
    startedAt: Date;
    finishedAt: Date;
    updatedBy: string;
}

