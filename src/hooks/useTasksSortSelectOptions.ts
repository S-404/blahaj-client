import {MySelectOption} from '../components/UI/types/mySelectTypes'
import {useMemo} from 'react'
import {TasksResponse} from '../services/types/tasksResponse'

export const useTasksSortSelectOptions = (): MySelectOption[] => {
    return useMemo(() => {

        const keys: Array<keyof TasksResponse> = ['deadline', 'taskGroup', 'name']

        return keys.reduce((prev, curr) =>
                [...prev, {value: curr, name: curr}],
            [] as MySelectOption[])

    }, [])
}