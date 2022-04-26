import React, {Dispatch, FC, SetStateAction} from 'react'
import {Box, Divider, Drawer, List, ListItem, ListItemText} from '@mui/material'
import {privateRoutes} from '../../../router/routes'
import {Link} from 'react-router-dom'


interface MyNavbarDrawer {
    drawerIsOpen: boolean;
    setDrawerIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MyDrawer: FC<MyNavbarDrawer> = ({drawerIsOpen, setDrawerIsOpen}) => {

    const handleClose = ()=>{
        setDrawerIsOpen(false)
    }

    return (
        <Drawer
            anchor="left"
            open={drawerIsOpen}
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