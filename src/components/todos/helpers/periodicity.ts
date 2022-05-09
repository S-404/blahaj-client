import {MySelectOption} from '../../UI/types/mySelectTypes'
import {PeriodicityTypes, IPeriodicityNames, IPeriodicityValues} from '../types/periodicityTypes'


export const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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


export function pad(num: number, places: number) {
    return String(num).padStart(places, '0')
}

function deadlineValues(periodicityValue: number): MySelectOption[] {

    const resultArray = []

    switch (periodicityValue) {
        case 1:
            for (let hh = 0; hh <= 23; hh++) {
                for (let mm = 0; mm <= 59; mm += 15) {
                    resultArray.push({
                        name: `${pad(hh, 2)}:${pad(mm, 2)}`,
                        value: hh * 60 + mm,
                    })
                }
            }
            break
        case 7:
            for (let wd = 0; wd < weekdays.length; wd++) {
                resultArray.push({
                    name: weekdays[wd],
                    value: wd
                })
            }
            break
        case 30:
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