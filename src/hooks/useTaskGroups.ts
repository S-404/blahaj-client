import {TasksResponse} from '../services/types/tasksResponse'
import {useMemo} from 'react'
import {MySelectOption} from '../components/UI/types/mySelectTypes'
import {FilterAdditionalValues} from '../store/types/todos/tasksFilterTypes'

export const useTaskGroups = (tasks: TasksResponse[]): MySelectOption[] => {
    const taskGroupsList = useTaskGroupsList(tasks)
    return useTaskGroupsOptions(taskGroupsList)
}

export const useTaskGroupsOptions = (taskGroups: string[]): MySelectOption[] => {
    return useMemo(() => {
        const defaultOption: MySelectOption = {value: '', name: FilterAdditionalValues.ALL}
        const taskGroupsOptions = taskGroups.reduce((prev, curr) =>
                [...prev, {value: curr, name: curr}]
            , [] as MySelectOption[])
        return [defaultOption, ...taskGroupsOptions]
    }, [taskGroups])
}


export const useTaskGroupsList = (tasks: TasksResponse[]): string[] => {
    return useMemo(() => {
        if (!tasks.length) return [] as string[]
        return tasks.reduce((prev, curr) =>
                prev.indexOf(curr.taskGroup) === -1 &&
                curr.taskGroup ?
                    [...prev, curr.taskGroup]
                    :
                    prev
            , [] as string[])
    }, [tasks])
}