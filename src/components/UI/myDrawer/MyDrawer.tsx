import React, {FC} from 'react'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import PrivateList from './PrivateList'
import PublicList from './PublicList'
import {Offcanvas, OffcanvasBody, OffcanvasHeader} from 'reactstrap'
import {useActions} from '../../../hooks/useActions'


const MyDrawer: FC = () => {

    const {isOpenDrawer} = useTypedSelector(state => state.nav)
    const {isAuth} = useTypedSelector(state => state.auth)

    const {setIsOpenDrawer} = useActions()

    const toggleHandler = () => {
        setIsOpenDrawer(false)
    }

    return (
        <Offcanvas
            isOpen={isOpenDrawer}
            toggle={toggleHandler}
        >
            <OffcanvasHeader
                toggle={toggleHandler}
            >
                Menu
            </OffcanvasHeader>
            <OffcanvasBody>
                {isAuth ?
                    <PrivateList/>
                    :
                    <PublicList/>
                }
            </OffcanvasBody>
        </Offcanvas>
    )
}

export default MyDrawer