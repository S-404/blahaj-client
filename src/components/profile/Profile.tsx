import React, {FC} from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import MyTeams from '../teams/MyTeams'
import Card from '@mui/material/Card'
import {CardHeader} from '@mui/material'
import Button from '@mui/material/Button'


const Profile: FC = () => {

    const {user} = useTypedSelector(state => state.auth)

    return (
        <Card>
            <CardHeader
                title={user.username}
                subheader={user.email}
                color='light'
                action={
                <>
                    <Button>
                        Update password
                    </Button>
                    <Button>
                        Update credentials
                    </Button>
                </>

            }
            />

            <MyTeams/>

        </Card>
    )
}

export default Profile