import React, {Dispatch, FC, SetStateAction} from 'react'
import {IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

interface BurgerButton {
    setDrawerIsOpen: Dispatch<SetStateAction<boolean>>;
}

const BurgerButton: FC<BurgerButton> = ({setDrawerIsOpen}) => {

    const buttonHandler = () => {
        setDrawerIsOpen(true)
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