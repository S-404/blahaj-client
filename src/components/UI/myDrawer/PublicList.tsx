import React from 'react'
import {Divider, List, ListItem, ListItemText} from '@mui/material'
import {publicRoutes} from '../../../router/routes'
import {Link} from 'react-router-dom'
import {useActions} from '../../../hooks/useActions'

const PublicList = () => {

    const {setIsOpenDrawer} = useActions()

    const handleClose = () => {
        setIsOpenDrawer(false)
    }

    return (
        <>
            <List>
                {publicRoutes.map((route) => (
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
        </>
    )
}

export default PublicList