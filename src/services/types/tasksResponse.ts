export interface TasksResponse {
    id: number;
    teamId: number;
    name: string;
    periodicity: number;
    deadline: number;
    taskGroup: string;
    description: string;
    note: string;
    updatedBy: string;
    startedAt: string;
    finishedAt: string;
    createdAt: string;
    updatedAt: string;
    taskHrefs: ITaskHrefs[];
}

export interface ITaskHrefs {
    id: number;
    href: string;
    isMain: boolean;
    shortName: string;
}