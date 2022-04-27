import React, {FC} from 'react'
import {Divider, List, ListItem, ListItemText} from '@mui/material'
import {generalRoutes, toolsRoutes} from '../../../router/routes'
import {Link} from 'react-router-dom'
import {useActions} from '../../../hooks/useActions'

const PrivateList: FC = () => {

    const {setIsOpenDrawer} = useActions()

    const handleClose = () => {
        setIsOpenDrawer(false)
    }

    return (
        <>
            <List>
                {generalRoutes.map((route) => (
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
            <List>
                {toolsRoutes.map((route) => (
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

        </>
    )
}

export default PrivateList