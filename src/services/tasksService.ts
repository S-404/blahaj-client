import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {ITask, TasksResponse, UpdateStatusPropsTypes} from './types/tasksResponse'
import {TaskHrefResponseProps, TaskHrefsResponse} from './types/taskHrefsResponse'


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

    static createTaskHref(href: TaskHrefResponseProps): Promise<AxiosResponse<TaskHrefsResponse>> {
        return _api.post<TaskHrefsResponse>(`todos/hrefs`, href)
    }

    static deleteTaskHref(id: number): Promise<AxiosResponse<TaskHrefsResponse>> {
        return _api.delete<TaskHrefsResponse>(`todos/hrefs/${id}`)
    }

    static updateTaskHref(href: TaskHrefResponseProps): Promise<AxiosResponse<TaskHrefsResponse>> {
        return _api.put<TaskHrefsResponse>(`todos/hrefs`, href)
    }
}