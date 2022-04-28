import React, {FC} from 'react'
import {AppBar, Box} from '@mui/material'
import MyDrawer from './myDrawer/MyDrawer'
import MyToolbar from './MyToolbar'

const MyNavbar: FC = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">

                <MyDrawer/>

                <MyToolbar/>

            </AppBar>
        </Box>
    )
}

export default MyNavbar