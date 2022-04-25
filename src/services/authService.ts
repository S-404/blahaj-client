import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {AuthResponseTypes} from "./types/authResponseTypes";

export default class AuthService{

    static async registration(username:string, password:string): Promise<AxiosResponse<AuthResponseTypes>> {
        return _api.post<AuthResponseTypes>('/auth/registration', {username,password})
    }

    static async login(username:string, password:string): Promise<AxiosResponse<AuthResponseTypes>> {
        return _api.post<AuthResponseTypes>('/auth/login', {username,password})
    }

    static async logout(): Promise<void> {
        return _api.post('auth/logout')
    }

}

