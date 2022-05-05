import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {TasksResponse} from './types/tasksResponse'


export default class TasksService {

    static fetchTasks(teamId: number): Promise<AxiosResponse<TasksResponse[]>> {
        return _api.get<TasksResponse[]>(`todos/tasks/${teamId}`)
    }


}