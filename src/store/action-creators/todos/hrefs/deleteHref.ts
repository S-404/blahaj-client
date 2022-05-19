import {Dispatch} from 'redux'
import axios from 'axios'
import {TaskHrefActionTypes, TasksAction, TasksActionTypes} from '../../../types/todos/tasksTypes'
import TasksService from '../../../../services/tasksService'

export const deleteHref = (id: number) => {
    return async (dispatch: Dispatch<TasksAction>) => {
        try {
            dispatch({type: TasksActionTypes.FETCH_TASKS})
            const response = await TasksService.deleteTaskHref(id)
            dispatch({type: TaskHrefActionTypes.DELETE_HREF, value: response.data})
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