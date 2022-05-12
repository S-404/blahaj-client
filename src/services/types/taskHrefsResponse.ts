export interface ITaskHref {
    id?: number;
    taskId: number;
    href: string;
    isMain: boolean;
    shortName: string;
}

export interface TaskHrefsResponse extends ITaskHref{
    id: number;
}

export interface NewTaskHrefProps extends ITaskHref {
    teamId: number;
}