import React, {FC} from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import MyTeams from '../teams/MyTeams'
import {Card, CardBody, CardHeader, CardSubtitle, CardTitle, Button} from 'reactstrap'

const Profile: FC = () => {

    const {user} = useTypedSelector(state => state.auth)

    return (
        <Card>
            <CardHeader>
                <CardTitle>{user.username}</CardTitle>
                <CardSubtitle>{user.email}</CardSubtitle>
            </CardHeader>
            <CardBody>
                <Button
                    size="sm"
                    outline
                >
                    Update password
                </Button>
                <Button
                    size="sm"
                    outline
                >
                    Update credentials
                </Button>
            </CardBody>


            <MyTeams/>

        </Card>
    )
}

export default Profile