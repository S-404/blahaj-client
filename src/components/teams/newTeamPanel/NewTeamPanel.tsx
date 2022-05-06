import React, {FC} from 'react'
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import NewTeamForm from './NewTeamForm'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


const NewTeamPanel: FC = () => {

    const {userParticipation} = useTypedSelector(state => state.participation)
    const {setNewTeamModal} = useActions()


    return (
        <>
            {!userParticipation.length ?
                <Typography>
                    There aren't any teams. You can
                    <Button onClick={() => setNewTeamModal(true)}>
                        Put together a team
                    </Button>
                </Typography>
                :
                <Button onClick={() => setNewTeamModal(true)}>
                    Put together a team
                </Button>
            }

            <NewTeamForm/>

        </>

    )
}

export default NewTeamPanel