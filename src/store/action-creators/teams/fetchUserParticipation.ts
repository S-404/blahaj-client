import {Dispatch} from 'redux'
import axios from 'axios'
import {UserParticipationAction, UserParticipationActionTypes} from '../../types/userParticipationTypes'
import TeamsService from '../../../services/teamsService'

export const fetchUserParticipation = () => {
    return async (dispatch: Dispatch<UserParticipationAction>) => {
        try {
            dispatch({type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION})
            const response = await TeamsService.fetchUserParticipation()
            dispatch({
                type: UserParticipationActionTypes.FETCH_USER_PARTICIPATION_SUCCESS,
                value: response.data
            })
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