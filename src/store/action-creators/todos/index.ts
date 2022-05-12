import {fetchTasks} from './fetchTasks'
import {createTask} from './createTask'
import {removeTask} from './removeTask'
import {updateTaskStatus} from './updateTaskStatus'
import {setSelectedTask} from './setSelectedTask'
import {updateTaskInfo} from './updateTaskInfo'
import {createHref} from './hrefs/createHref'


export const tasksActions = {
    fetchTasks,
    createTask,
    removeTask,
    updateTaskStatus,
    setSelectedTask,
    updateTaskInfo,
    createHref
}