import {useMemo} from 'react'
import {StatusTextTypes} from '../components/todos/types/statusTypes'
import {MySelectOption} from '../components/UI/types/mySelectTypes'
import {FilterAdditionalValues} from '../store/types/todos/tasksFilterTypes'

export const useStatusFilterSelectOptions = (): MySelectOption[] => {
    return useMemo(() => {
        const resultOptions = [] as MySelectOption[]
        resultOptions.push({value: FilterAdditionalValues.ALL, name: FilterAdditionalValues.ALL})
        const statuses = Object.values(StatusTextTypes)
        for (let status in statuses) {
            resultOptions.push({value: statuses[status], name: statuses[status]})
        }
        return resultOptions
    }, [])
}
