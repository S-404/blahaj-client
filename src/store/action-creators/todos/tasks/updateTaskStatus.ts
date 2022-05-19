import {Dispatch} from 'redux'
import axios from 'axios'
import {TasksAction, TasksActionTypes} from '../../../types/todos/tasksTypes'
import TasksService from '../../../../services/tasksService'
import {UpdateStatusPropsTypes} from '../../../../services/types/tasksResponse'

export const updateTaskStatus = ({id, mode}: UpdateStatusPropsTypes) => {
    return async (dispatch: Dispatch<TasksAction>) => {
        try {
            dispatch({type: TasksActionTypes.FETCH_TASKS})
            const response = await TasksService.updateTaskStatus({id, mode})
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