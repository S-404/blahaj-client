import {fetchTasks} from './tasks/fetchTasks'
import {createTask} from './tasks/createTask'
import {removeTask} from './tasks/removeTask'
import {updateTaskStatus} from './tasks/updateTaskStatus'
import {setSelectedTask} from './tasks/setSelectedTask'
import {updateTaskInfo} from './tasks/updateTaskInfo'
import {createHref} from './hrefs/createHref'
import {deleteHref} from './hrefs/deleteHref'
import {updateHref} from './hrefs/updateHref'
import {setSelectedHref} from './hrefs/setSelectedHref'
import {setTaskGroupFilter} from './filter-sort/setTaskGroupFilter'
import {setStatusFilter} from './filter-sort/setStatusFilter'


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
    setTaskGroupFilter,
    setStatusFilter,
}