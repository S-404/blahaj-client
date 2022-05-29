import React, {FC} from 'react'
import {Button} from 'reactstrap'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {useActions} from '../../../hooks/useActions'

const MyTeamPropertiesButtons: FC = () => {

    const {selectedTeam} = useTypedSelector(state => state.selectedTeam)
    const {leaveTeam} = useActions()

    const leaveTeamHandler = () => {
        if (window.confirm(`leave from '${selectedTeam.name}' team`)) {
            leaveTeam(selectedTeam.id)
        }
    }

    return (
        <div className='mb-2'>
            <Button
                type="submit"
                color="success"
            >
                Apply
            </Button>
            <Button
                type="button"
                outline
                color="danger"
                onClick={leaveTeamHandler}
            >
                Leave
            </Button>
        </div>
    )
}

export default MyTeamPropertiesButtons