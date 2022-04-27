import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {TeamsResponseTypes} from './types/teamsResponseTypes'


export default class TeamsService {

    static fetchTeams(): Promise<AxiosResponse<TeamsResponseTypes>> {
        return _api.get<TeamsResponseTypes>(`teams/teams/`)
    }
}