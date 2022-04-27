import React, {FC} from 'react'
import {IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {useActions} from '../../hooks/useActions'


const BurgerButton: FC = () => {

    const {setIsOpenDrawer} = useActions()

    const buttonHandler = () => {
        setIsOpenDrawer(true)
    }

    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
            onClick={buttonHandler}
        >
            <MenuIcon/>
        </IconButton>
    )
}

export default BurgerButton