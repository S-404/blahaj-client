import {MySelectOption} from '../../UI/types/mySelectTypes'

export interface PeriodicityTypes{
    name: IPeriodicityName;
    value: IPeriodicityValue;
    deadlineArr: MySelectOption[];
}

export enum IPeriodicityNames {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
}
export enum IPeriodicityValues {
    DAILY = 1,
    WEEKLY = 7,
    MONTHLY = 30,
}

export type IPeriodicityName =
    IPeriodicityNames.DAILY |
    IPeriodicityNames.WEEKLY |
    IPeriodicityNames.MONTHLY

export type IPeriodicityValue =
    IPeriodicityValues.DAILY |
    IPeriodicityValues.WEEKLY |
    IPeriodicityValues.MONTHLY