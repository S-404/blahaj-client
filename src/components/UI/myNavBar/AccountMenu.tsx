import React, {Dispatch, FC, SetStateAction} from 'react'
import {Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip} from '@mui/material'
import {AccountCircle, Logout, Settings} from '@mui/icons-material'
import {useActions} from '../../../hooks/useActions'

interface AccountMenu {
    anchorEl: null | HTMLElement;
    setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>;
}

const AccountMenu: FC<AccountMenu> = ({setAnchorEl, anchorEl}) => {

    const {logout} = useActions()

    const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleLogout = () => {
        setAnchorEl(null)
        logout()
    }
    return (
        <>
            <Tooltip title="Open settings">
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
            </Tooltip>

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
                <Box sx={{width: 250}}>
                    <MenuItem onClick={handleClose}><Avatar/> Profile</MenuItem>
                    <Divider/>
                    <MenuItem><ListItemIcon><Settings fontSize="small"/></ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}><ListItemIcon><Logout fontSize="small"/></ListItemIcon>
                        Logout
                    </MenuItem>
                </Box>
            </Menu>
        </>
    )
}

export default AccountMenu