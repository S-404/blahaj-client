import {IPeriodicityValues} from '../types/periodicityTypes'
import {StatusAction, StatusActionsTextTypes, StatusText, StatusTextTypes} from '../types/statusTypes'
import {dateWithOffset} from './utils'


function defineStatus(
    periodicity: number,
    startedAt: Date,
    finishedAt: Date,
    deadline: number
): StatusText {

    const checkDate: Date = new Date()
    checkDate.setHours(0)
    checkDate.setMinutes(0)

    const started: Date = dateWithOffset(new Date(startedAt))
    const finished: Date = dateWithOffset(new Date(finishedAt))


    switch (periodicity) {
        case IPeriodicityValues.DAILY:
            break
        case IPeriodicityValues.WEEKLY:
            checkDate.setDate(checkDate.getDate() - checkDate.getDay())
            break
        case IPeriodicityValues.MONTHLY:
            checkDate.setDate(1)
            break
    }

    if (started > checkDate) {
        if (finished > started) return StatusTextTypes.FINISHED
        return StatusTextTypes.STARTED
    }

    return checkDeadline(deadline, periodicity)
}

function checkDeadline(deadline: number, periodicity: number,): StatusText {

    const checkDate: Date = new Date()
    const now: Date = new Date()

    switch (periodicity) {
        case IPeriodicityValues.DAILY:
            checkDate.setHours(0)
            checkDate.setMinutes(deadline)
            const minutesDiff = (now.valueOf() - checkDate.valueOf()) / 1000 / 60
            if (minutesDiff > 0) return StatusTextTypes.NOT_STARTED_MISSED
            else if (minutesDiff > -60) return StatusTextTypes.NOT_STARTED_REQUIRED
            break
        case IPeriodicityValues.WEEKLY:
            if (checkDate.getDay() > deadline) return StatusTextTypes.NOT_STARTED_MISSED
            else if (checkDate.getDay() === deadline) return StatusTextTypes.NOT_STARTED_REQUIRED
            break
        case IPeriodicityValues.MONTHLY:
            if (checkDate.getDate() > deadline) return StatusTextTypes.NOT_STARTED_MISSED
            else if (checkDate.getDate() === deadline) return StatusTextTypes.NOT_STARTED_REQUIRED
            break
    }

    return StatusTextTypes.NOT_STARTED_NOT_REQUIRED
}


function getActionText(status: StatusText): StatusAction {

    switch (status) {
        case StatusTextTypes.STARTED:
            return StatusActionsTextTypes.FINISH
        case StatusTextTypes.FINISHED:
            return StatusActionsTextTypes.RESET
        default:
            return StatusActionsTextTypes.START
    }
}

export function getTaskStatus(periodicity: number, startedAt: Date, finishedAt: Date, deadline: number) {
    const statusText = defineStatus(periodicity, startedAt, finishedAt, deadline)
    const actionText = getActionText(statusText)
    return {statusText, actionText}
}
