import React, {FC} from 'react'
import AccountMenu from './AccountMenu'
import {Link as RouterLink} from 'react-router-dom'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import TeamSelector from './TeamSelector'
import {Button} from 'reactstrap'


const MyToolbar: FC = () => {

    const {isAuth} = useTypedSelector(state => state.auth)

    if (isAuth) return (
        <>
            <TeamSelector/>
            <AccountMenu/>
        </>
    )

    return (
        <>
            <Button
                color='primary'
                tag={RouterLink}
                to="/login"
            >
                Sign In
            </Button>
        </>
    )
}

export default MyToolbar