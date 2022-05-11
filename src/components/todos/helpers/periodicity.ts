import {MySelectOption} from '../../UI/types/mySelectTypes'
import {IPeriodicityNames, IPeriodicityValues, PeriodicityTypes} from '../types/periodicityTypes'
import {pad, weekdays} from './utils'

export const periodicity: PeriodicityTypes[] = [
    {
        name: IPeriodicityNames.DAILY,
        value: IPeriodicityValues.DAILY,
        deadlineArr: deadlineValues(IPeriodicityValues.DAILY)
    },
    {
        name: IPeriodicityNames.WEEKLY,
        value: IPeriodicityValues.WEEKLY,
        deadlineArr: deadlineValues(IPeriodicityValues.WEEKLY)
    },
    {
        name: IPeriodicityNames.MONTHLY,
        value: IPeriodicityValues.MONTHLY,
        deadlineArr: deadlineValues(IPeriodicityValues.MONTHLY)
    }
]


function deadlineValues(periodicityValue: number): MySelectOption[] {

    const resultArray = []

    switch (periodicityValue) {
        case IPeriodicityValues.DAILY:
            for (let hh = 0; hh <= 23; hh++) {
                for (let mm = 0; mm <= 59; mm += 15) {
                    resultArray.push({
                        name: `${pad(hh, 2)}:${pad(mm, 2)}`,
                        value: hh * 60 + mm,
                    })
                }
            }
            break
        case IPeriodicityValues.WEEKLY:
            for (let wd = 0; wd < weekdays.length; wd++) {
                resultArray.push({
                    name: weekdays[wd],
                    value: wd
                })
            }
            break
        case IPeriodicityValues.MONTHLY:
            for (let d = 1; d <= 31; d++) {
                resultArray.push({
                    name: `${d}`,
                    value: d
                })
            }
            break
        default:
            resultArray.push({
                name: `00:00`,
                value: 1
            })
            break
    }
    return resultArray
}

