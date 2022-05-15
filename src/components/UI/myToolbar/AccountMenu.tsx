import React, {FC} from 'react'
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {Link as RouterLink} from 'react-router-dom'
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap'

const AccountMenu: FC = () => {

    const {user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    const handleLogout = () => {
        logout()
    }


    return (
        <UncontrolledDropdown>

            <DropdownToggle
                color={'primary'}
                caret
            >
                {user.email}
            </DropdownToggle>

            <DropdownMenu>

                <DropdownItem
                    tag={RouterLink}
                    to={'/user'}
                >
                    Profile
                </DropdownItem>

                <DropdownItem
                    onClick={handleLogout}
                >
                    Logout
                </DropdownItem>

            </DropdownMenu>

        </UncontrolledDropdown>

    )
}

export default AccountMenu