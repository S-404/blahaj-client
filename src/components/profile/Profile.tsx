import React, {FC} from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {Button, Card, CardBody, CardHeader, CardSubtitle, CardTitle} from 'reactstrap'
import {Link} from 'react-router-dom'

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
            <Button tag={Link} to={'/teams'}>My Teams</Button>
        </Card>
    )
}

export default Profile