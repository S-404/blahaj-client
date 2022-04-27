import React, {FC} from 'react'
import {Box, Drawer} from '@mui/material'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {useActions} from '../../../hooks/useActions'
import PrivateList from './PrivateList'
import PublicList from './PublicList'


const MyDrawer: FC = () => {

    const {isOpenDrawer} = useTypedSelector(state => state.nav)
    const {isAuth} = useTypedSelector(state => state.auth)
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
                {isAuth ?
                    <PrivateList/>
                    :
                    <PublicList/>
                }

            </Box>
        </Drawer>
    )
}

export default MyDrawer