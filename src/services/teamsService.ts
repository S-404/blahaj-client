import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {TeamsResponse} from './types/teamsResponse'
import {UserParticipationResponse} from './types/userParticipationResponse'


export default class TeamsService {

    static fetchTeams(): Promise<AxiosResponse<TeamsResponse>> {
        return _api.get<TeamsResponse>(`teams/teams/`)
    }

    static fetchUserParticipation(): Promise<AxiosResponse<UserParticipationResponse[]>> {
        return _api.get<UserParticipationResponse[]>(`teams/participant/`)
    }

}