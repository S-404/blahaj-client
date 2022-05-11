import {fetchTasks} from './fetchTasks'
import {createTask} from './createTask'
import {removeTask} from './removeTask'
import {updateTaskStatus} from './updateTaskStatus'


export const tasksActions = {
    fetchTasks,
    createTask,
    removeTask,
    updateTaskStatus,
}