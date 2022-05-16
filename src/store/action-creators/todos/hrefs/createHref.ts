import {TaskHrefResponseProps} from '../../../../services/types/taskHrefsResponse'
import {Dispatch} from 'redux'
import axios from 'axios'
import {TaskHrefActionTypes, TasksAction, TasksActionTypes} from '../../../types/tasksTypes'
import TasksService from '../../../../services/tasksService'

export const createHref = (newHref: TaskHrefResponseProps) => {
    return async (dispatch: Dispatch<TasksAction>) => {
        try {
            dispatch({type: TasksActionTypes.FETCH_TASKS})
            const response = await TasksService.createTaskHref(newHref)
            dispatch({type: TaskHrefActionTypes.ADD_HREF, value: response.data})
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