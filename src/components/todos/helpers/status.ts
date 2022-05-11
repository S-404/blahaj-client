import {IPeriodicityValues} from '../types/periodicityTypes'
import {StatusAction, StatusActionsTextTypes, StatusText, StatusTextTypes} from '../types/statusTypes'

export function defineStatus(periodicity: number, startedAt: Date, finishedAt: Date):StatusText {

    let today: Date = new Date()
    today.setHours(0)

    const timeZoneOffset = today.getTimezoneOffset()

    let started: Date = new Date(startedAt)
    started.setMinutes(started.getMinutes() + timeZoneOffset)

    let finished: Date = new Date(finishedAt)
    finished.setMinutes(finished.getMinutes() + timeZoneOffset)


    switch (periodicity) {
        case IPeriodicityValues.DAILY:
            return getStatusText(finished, started, today)

        case IPeriodicityValues.WEEKLY:
            today.setDate(today.getDate() - today.getDay())
            return getStatusText(finished, started, today)

        case IPeriodicityValues.MONTHLY:
            today.setDate(1)
            return getStatusText(finished, started, today)

        default:
            return StatusTextTypes.NOT_STARTED
    }

}


export function getStatusText(finished: Date, started: Date, checkDate: Date):StatusText {

    if (started > checkDate) {
        if (finished > started) {
            return StatusTextTypes.FINISHED
        } else {
            return StatusTextTypes.STARTED
        }
    } else {
        return StatusTextTypes.NOT_STARTED
    }
}

export function getActionText(status: StatusText):StatusAction {

    switch (status) {
        case StatusTextTypes.NOT_STARTED:
            return StatusActionsTextTypes.START
        case StatusTextTypes.STARTED:
            return StatusActionsTextTypes.FINISH
        case StatusTextTypes.FINISHED:
            return StatusActionsTextTypes.RESET
        default:
            return StatusActionsTextTypes.START
    }
}

export function getTaskStatus(periodicity: number, startedAt: Date, finishedAt: Date) {
    const statusText = defineStatus(periodicity, startedAt, finishedAt)
    const actionText = getActionText(statusText)
    return {statusText, actionText}
}
