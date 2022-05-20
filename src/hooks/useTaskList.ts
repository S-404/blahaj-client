import {TasksResponse} from '../services/types/tasksResponse'
import {FilterAdditionalValues, TasksFiltersState} from '../store/types/todos/tasksFilterTypes'
import {SortOrderValues, TasksSortState} from '../store/types/todos/tasksSortTypes'
import {useMemo} from 'react'
import {defineStatus} from '../components/todos/helpers/status'

export const useTaskList = (
    tasks: TasksResponse[],
    filter: TasksFiltersState,
    sort: TasksSortState
): TasksResponse[] => {
    const filteredTasks = useFilteredTaskList(tasks, filter)
    return useSortedTaskList(filteredTasks, sort)
}

export const useFilteredTaskList = (tasks: TasksResponse[], filter: TasksFiltersState): TasksResponse[] => {
    return useMemo(() => {
        if (tasks.length) {

            return tasks.filter(task => {

                const statusCheck: boolean = filter.status !== FilterAdditionalValues.ALL ?
                    filter.status === defineStatus({...task}) :
                    true

                const taskGroupCheck: boolean = filter.taskGroup ?
                    task.taskGroup === filter.taskGroup :
                    true

                return taskGroupCheck && statusCheck
            })
        }
        return tasks
    }, [tasks, filter])

}

export const useSortedTaskList = (tasks: TasksResponse[], sort: TasksSortState): TasksResponse[] => {

    return useMemo(() => {

        if (tasks.length) {
            const sortingOrderValue = sort.order === SortOrderValues.DESC ? -1 : 1

            return tasks.sort((a, b) => {

                    if (a.periodicity < b.periodicity) return -1
                    if (a.periodicity > b.periodicity) return 1

                    if (a[sort.criteria] < b[sort.criteria]) return -sortingOrderValue
                    if (a[sort.criteria] > b[sort.criteria]) return sortingOrderValue

                    return 0
                }
            )
        }
        return tasks
    }, [tasks, sort])

}
