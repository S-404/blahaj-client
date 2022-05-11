import {pad, weekdays} from './utils'
import {IPeriodicityValue, IPeriodicityValues} from '../types/periodicityTypes'

export function getDeadlineValue(deadline: number, periodicity: IPeriodicityValue): string {

    switch (periodicity) {
        case IPeriodicityValues.DAILY:
            let d = new Date()
            d.setHours(0)
            d.setMinutes(deadline)
            return `${pad(d.getHours(), 2)}:${pad(d.getMinutes(), 2)}`

        case IPeriodicityValues.WEEKLY:
            return weekdays[deadline]

        case IPeriodicityValues.MONTHLY:
            return `${deadline}`

        default:
            return '00:00'
    }
}