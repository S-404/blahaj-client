import React, {FC} from 'react'
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import NewTeamForm from './NewTeamForm'
import {Button} from 'reactstrap'

const NewTeamPanel: FC = () => {

    const {userParticipation} = useTypedSelector(state => state.participation)
    const {setNewTeamModal} = useActions()


    return (
        <>
            {!userParticipation.length ?
                <div>
                    There aren't any teams. You can
                    <Button
                        onClick={() => setNewTeamModal(true)}
                    >
                        Put together a team
                    </Button>
                </div>
                :
                <Button
                    outline
                    color='success'
                    size='sm'
                    onClick={() => setNewTeamModal(true)}
                >
                    Put together a team
                </Button>
            }

            <NewTeamForm/>

        </>

    )
}

export default NewTeamPanel