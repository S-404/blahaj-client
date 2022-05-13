import {fetchTasks} from './fetchTasks'
import {createTask} from './createTask'
import {removeTask} from './removeTask'
import {updateTaskStatus} from './updateTaskStatus'
import {setSelectedTask} from './setSelectedTask'
import {updateTaskInfo} from './updateTaskInfo'
import {createHref} from './hrefs/createHref'
import {deleteHref} from './hrefs/deleteHref'
import {updateHref} from './hrefs/updateHref'
import {setSelectedHref} from './hrefs/setSelectedHref'


export const tasksActions = {
    fetchTasks,
    createTask,
    removeTask,
    updateTaskStatus,
    setSelectedTask,
    updateTaskInfo,
    createHref,
    deleteHref,
    updateHref,
    setSelectedHref,
}