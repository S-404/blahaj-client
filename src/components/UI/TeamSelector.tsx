import React, {useEffect} from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {Box, Button, Menu, MenuItem} from '@mui/material'
import {useActions} from '../../hooks/useActions'

const TeamSelector = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const {selectedTeam} = useTypedSelector(state => state.nav)
    const {userParticipation} = useTypedSelector(state => state.participation)
    const {fetchUserParticipation, setSelectedTeam} = useActions()

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

    const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSelector = (teamId: number) => {
        setSelectedTeamByTeamId(teamId)
        localStorage.setItem('selectedTeamId', `${teamId}`)
        handleClose()
    }

    function setSelectedTeamByTeamId(teamId: number) {
        const objIndex = userParticipation.findIndex(team => team.teamId === teamId)
        const selectedTeam = userParticipation[objIndex].team
        setSelectedTeam(selectedTeam)
    }


    return (
        <>
            <Box sx={{display: {md: 'flex'}}}>
                <Button
                    size="small"
                    aria-label="my teams"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    My Team: {selectedTeam.id ? selectedTeam.name : 'not selected'}
                </Button>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Box sx={{width: 250, maxHeight: 250}}>
                        {userParticipation.map(team => (
                            <MenuItem
                                key={team.team.id}
                                onClick={() => handleSelector(team.team.id)}
                            >
                                {team.team.name}
                            </MenuItem>
                        ))}
                    </Box>
                </Menu>

            </Box>
        </>
    )
}

export default TeamSelector