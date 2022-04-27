import React, {FC} from 'react'
import {Box, Divider, Drawer, List, ListItem, ListItemText} from '@mui/material'
import {privateRoutes} from '../../router/routes'
import {Link} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'


const MyDrawer: FC = () => {

    const {isOpenDrawer} = useTypedSelector(state => state.nav)
    const {setIsOpenDrawer} = useActions()

    const handleClose = () => {
        setIsOpenDrawer(false)
    }

    return (
        <Drawer
            anchor="left"
            open={isOpenDrawer}
            onClose={handleClose}
        >
            <Box
                sx={{width: 250}}
                role="presentation"
            >
                <List>
                    {privateRoutes.map((route) => (
                        <ListItem
                            component={Link}
                            to={route.path}
                            button
                            key={route.shortName}
                            onClick={handleClose}
                        >
                            <ListItemText primary={route.shortName}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Box>
        </Drawer>
    )
}

export default MyDrawer