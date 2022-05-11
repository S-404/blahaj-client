

export enum StatusTextTypes {
    FINISHED = 'Finished',
    NOT_STARTED = 'Not Started',
    STARTED = 'Started',
}

export enum StatusActionsTextTypes {
    START = 'Start',
    FINISH = 'Finish',
    RESET = 'Reset',
}


export type  StatusAction =
    StatusActionsTextTypes.START |
    StatusActionsTextTypes.FINISH |
    StatusActionsTextTypes.RESET

export type  StatusText =
    StatusTextTypes.STARTED |
    StatusTextTypes.FINISHED |
    StatusTextTypes.NOT_STARTED

export interface ITaskStatus{
    statusText: StatusText;
    actionText: StatusAction
}