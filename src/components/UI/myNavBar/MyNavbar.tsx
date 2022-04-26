import React, {FC, useState} from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {Link as RouterLink} from 'react-router-dom'
import MyDrawer from './MyNavbarDrawer'
import AccountMenu from './AccountMenu'
import BurgerButton from './BurgerButton'

const MyNavbar: FC = () => {

    const isAuth = useTypedSelector(state => state.auth.isAuth)
    const selectedPage = useTypedSelector(state => state.nav.selectedPage)

    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">

                    <MyDrawer
                        drawerIsOpen={drawerIsOpen}
                        setDrawerIsOpen={setDrawerIsOpen}
                    />
                    <Toolbar>

                        <BurgerButton setDrawerIsOpen={setDrawerIsOpen}/>

                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            {selectedPage}
                        </Typography>

                        {isAuth ?
                            <AccountMenu
                                anchorEl={anchorEl}
                                setAnchorEl={setAnchorEl}
                            />
                            :
                            <Button
                                color="inherit"
                                component={RouterLink}
                                to="/login"
                            >
                                Sign In
                            </Button>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default MyNavbar