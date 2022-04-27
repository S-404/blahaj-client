import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {login} from '../store/action-creators/auth/login'
import {logout} from '../store/action-creators/auth/logout'
import {registration} from '../store/action-creators/auth/registration'
import {checkAuth} from '../store/action-creators/auth/checkAuth'
import {setSelectedPage} from '../store/action-creators/nav/setSelectedPage'
import {setIsOpenDrawer} from '../store/action-creators/nav/setIsOpenDrawer'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
            login,
            logout,
            registration,
            checkAuth,
            setSelectedPage,
            setIsOpenDrawer
        },
        dispatch)
}