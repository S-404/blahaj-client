import {_api} from '../api'
import {AxiosResponse} from 'axios'
import {ITeamFields, TeamsResponse, UserParticipationResponse} from './types/teamsResponse'


export default class TeamsService {

    static fetchTeams(): Promise<AxiosResponse<TeamsResponse>> {
        return _api.get<TeamsResponse>(`teams/teams/`)
    }

    static createTeam(data: ITeamFields): Promise<AxiosResponse<TeamsResponse>> {
        return _api.post<TeamsResponse>(`teams/teams/`, data)
    }

    static leaveTeam(teamId: number): Promise<AxiosResponse> {
        return _api.delete(`teams/teams/${teamId}`)
    }

    static fetchUserParticipation(): Promise<AxiosResponse<UserParticipationResponse[]>> {
        return _api.get<UserParticipationResponse[]>(`teams/participant/`)
    }

    static updateTeam(data: ITeamFields): Promise<AxiosResponse<TeamsResponse>> {
        return _api.put<TeamsResponse>(`teams/teams/`, data)
    }

}