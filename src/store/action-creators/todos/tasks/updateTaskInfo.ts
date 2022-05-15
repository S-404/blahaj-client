import {Dispatch} from 'redux'
import axios from 'axios'
import {TasksAction, TasksActionTypes} from '../../../types/tasksTypes'
import TasksService from '../../../../services/tasksService'
import {TasksResponse} from '../../../../services/types/tasksResponse'

export const updateTaskInfo = (task: TasksResponse) => {
    return async (dispatch: Dispatch<TasksAction>) => {
        try {
            dispatch({type: TasksActionTypes.FETCH_TASKS})
            const response = await TasksService.updateTaskInfo(task)
            dispatch({type: TasksActionTypes.UPDATE_TASK, value: response.data})
        } catch (e) {
            let errMsg
            if (axios.isAxiosError(e)) {
                errMsg = e?.response?.data?.message
            }
            let message = errMsg ? errMsg : 'connection failed'
            dispatch({
                type: TasksActionTypes.FETCH_TASKS_ERROR,
                value: message
            })
        }
    }

}