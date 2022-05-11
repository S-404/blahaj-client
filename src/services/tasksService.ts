import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {ITask, TasksResponse, UpdateStatusPropsTypes} from './types/tasksResponse'


export default class TasksService {

    static fetchTasks(teamId: number): Promise<AxiosResponse<TasksResponse[]>> {
        return _api.get<TasksResponse[]>(`todos/tasks/${teamId}`)
    }

    static createTask(newTask: ITask): Promise<AxiosResponse<TasksResponse>> {
        return _api.post<TasksResponse>(`todos/tasks`, newTask)
    }

    static removeTask(taskId: number): Promise<AxiosResponse> {
        return _api.delete(`todos/tasks/${taskId}`)
    }

    static updateTaskStatus({id, mode}: UpdateStatusPropsTypes): Promise<AxiosResponse<TasksResponse>> {
        return _api.put<TasksResponse>(`todos/tasks/${id}/status/${mode.toLocaleLowerCase()}`)
    }

    static updateTaskInfo(task: TasksResponse): Promise<AxiosResponse<TasksResponse>> {
        return _api.put<TasksResponse>(`todos/tasks/info`, task)
    }

}