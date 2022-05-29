import {fetchTeams} from './fetchTeams'
import {fetchUserParticipation} from './fetchUserParticipation'
import {addTeam} from './addTeam'
import {leaveTeam} from './leaveTeam'
import {setSelectedTeam} from './setSelectedTeam'
import {updateTeam} from './updateTeam'


export const teamsActions = {
    fetchTeams,
    fetchUserParticipation,
    addTeam,
    leaveTeam,
    setSelectedTeam,
    updateTeam
}