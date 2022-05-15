export enum StatusTextTypes {
    FINISHED = 'Finished',
    STARTED = 'Started',
    NOT_STARTED_MISSED = 'Missed',
    NOT_STARTED_NOT_REQUIRED = 'Not Required',
    NOT_STARTED_REQUIRED = 'Required',
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
    StatusTextTypes.NOT_STARTED_NOT_REQUIRED |
    StatusTextTypes.NOT_STARTED_REQUIRED |
    StatusTextTypes.NOT_STARTED_MISSED


export interface ITaskStatus {
    statusText: StatusText;
    actionText: StatusAction
}