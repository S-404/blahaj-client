import {Dispatch} from "redux"
import axios from "axios"
import {TeamsAction, TeamsActionTypes} from '../../types/teamsTypes'
import TeamsService from '../../../services/teamsService'

export const fetchTeams = () => {
    return async (dispatch: Dispatch<TeamsAction>) => {
        try {
            dispatch({type: TeamsActionTypes.FETCH_TEAMS})
            const response = await TeamsService.fetchTeams()
            dispatch({type: TeamsActionTypes.FETCH_TEAMS_SUCCESS, value: response.data.teams})
        } catch (e) {
            let errMsg
            if (axios.isAxiosError(e)) {
                errMsg = e?.response?.data?.message
            }
            let message = errMsg ? errMsg : "connection failed"
            dispatch({
                type: TeamsActionTypes.FETCH_TEAMS_ERROR,
                value: message
            })
        }
    }

}