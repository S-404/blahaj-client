import React, {useEffect} from 'react'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {useActions} from '../../../hooks/useActions'
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap'

const TeamSelector = () => {

    const {selectedNavTeam} = useTypedSelector(state => state.nav)
    const {userParticipation} = useTypedSelector(state => state.participation)
    const {fetchUserParticipation, setSelectedNavTeam} = useActions()

    useEffect(() => {
        if (!userParticipation.length) {
            fetchUserParticipation()
        }
    }, [])

    useEffect(() => {
        if (userParticipation.length) {
            const teamId = localStorage.getItem('selectedTeamId')
            if (teamId) setSelectedTeamByTeamId(+teamId)
        }
    }, [userParticipation])


    const handleSelector = (teamId: number) => {
        setSelectedTeamByTeamId(teamId)
        localStorage.setItem('selectedTeamId', `${teamId}`)
    }

    function setSelectedTeamByTeamId(teamId: number) {
        const objIndex = userParticipation.findIndex(team => team.teamId === teamId)
        const selectedTeam = userParticipation[objIndex].team
        setSelectedNavTeam(selectedTeam)
    }


    return (
        <UncontrolledDropdown>

            <DropdownToggle
                caret
                color={'primary'}
            >
                {`MY TEAM: ${selectedNavTeam.id ? selectedNavTeam.name : 'not selected'}`}
            </DropdownToggle>

            <DropdownMenu>

                <DropdownItem header>
                    Select Your Team
                </DropdownItem>

                {userParticipation.map(team => (
                    <DropdownItem
                        key={team.team.id}
                        onClick={() => handleSelector(team.team.id)}
                    >
                        {team.team.name}
                    </DropdownItem>
                ))}

            </DropdownMenu>

        </UncontrolledDropdown>
    )
}

export default TeamSelector