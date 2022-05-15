export interface ITaskHrefValues {
    href: string;
    shortName: string;
}

export interface ITaskHref extends ITaskHrefValues{
    id?: number;
    taskId?: number;
    teamId?: number;
}

export interface TaskHrefsResponse extends ITaskHref{
    id: number;
}

export interface TaskHrefResponseProps extends ITaskHref {
    taskId: number;
    teamId: number;
}