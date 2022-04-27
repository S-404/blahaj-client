import React, {FC} from 'react'
import {Box, Button, Toolbar, Typography} from '@mui/material'
import BurgerButton from './BurgerButton'
import AccountMenu from './AccountMenu'
import {Link as RouterLink} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'


const MyToolbar: FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const {selectedPage} = useTypedSelector(state => state.nav)
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        <Toolbar>

            <BurgerButton/>

            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {selectedPage}
            </Typography>

            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
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
            </Box>

        </Toolbar>
    )
}

export default MyToolbar