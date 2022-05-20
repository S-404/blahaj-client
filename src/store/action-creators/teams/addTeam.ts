import {Dispatch} from 'redux'
import axios from 'axios'
import TeamsService from '../../../services/teamsService'
import {ITeamFields} from '../../../services/types/teamsResponse'
import {UserParticipationAction, UserParticipationActionTypes} from '../../types/teams/userParticipationTypes'

export const addTeam = (data: ITeamFields) => {
    return async (dispatch: Dispatch<UserParticipationAction>) => {
        try {
            dispatch({type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION})
            await TeamsService.createTeam(data)
            const response = await TeamsService.fetchUserParticipation()
            dispatch({type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION_SUCCESS, value: response.data})
        } catch (e) {
            let errMsg
            if (axios.isAxiosError(e)) {
                errMsg = e?.response?.data?.message
            }
            let message = errMsg ? errMsg : 'connection failed'
            dispatch({
                type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION_ERROR,
                value: message
            })
        }
    }

}