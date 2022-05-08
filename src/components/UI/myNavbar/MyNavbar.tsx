import React, {FC} from 'react'
import MyDrawer from '../myDrawer/MyDrawer'
import MyToolbar from '../myToolbar/MyToolbar'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {Nav, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap'
import {useActions} from '../../../hooks/useActions'

const MyNavbar: FC = () => {

    const {selectedPage} = useTypedSelector(state => state.nav)
    const {setIsOpenDrawer} = useActions()

    const toggleHandler = () => {
        setIsOpenDrawer(true)
    }

    return (
        <Navbar
            color="primary"
            dark
            // fixed="top"
            light
        >
            <div>
                <NavbarToggler
                    onClick={toggleHandler}
                />

                <MyDrawer/>

                <NavbarBrand
                    className="m-2"
                >
                    {selectedPage}
                </NavbarBrand>
            </div>
            <Nav>
                <MyToolbar/>
            </Nav>

        </Navbar>
    )
}

export default MyNavbar