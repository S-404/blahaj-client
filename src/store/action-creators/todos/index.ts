import {fetchTasks} from './fetchTasks'
import {createTask} from './createTask'
import {removeTask} from './removeTask'
import {updateTaskStatus} from './updateTaskStatus'
import {setSelectedTask} from './setSelectedTask'


export const tasksActions = {
    fetchTasks,
    createTask,
    removeTask,
    updateTaskStatus,
    setSelectedTask,
}