import {Dispatch} from 'redux'
import axios from 'axios'
import TeamsService from '../../../services/teamsService'
import {UserParticipationAction, UserParticipationActionTypes} from '../../types/teams/userParticipationTypes'

export const leaveTeam = (teamId:number) => {
    return async (dispatch: Dispatch<UserParticipationAction>) => {
        try {
            dispatch({type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION})

            await TeamsService.leaveTeam(teamId)
            dispatch({type: UserParticipationActionTypes.REMOVE_PARTICIPATION, value: teamId})
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