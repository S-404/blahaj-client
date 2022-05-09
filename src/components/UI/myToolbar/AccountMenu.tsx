import React, {FC, useState} from 'react'
import {useActions} from '../../../hooks/useActions'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {Link as RouterLink} from 'react-router-dom'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

const AccountMenu: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const {user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    const handleLogout = () => {
        logout()
    }

    const toggleHandler = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <Dropdown
            isOpen={isOpen}
            toggle={toggleHandler}
        >

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

        </Dropdown>

    )
}

export default AccountMenu