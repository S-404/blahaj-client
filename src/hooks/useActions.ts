import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {navActions} from '../store/action-creators/nav'
import {authActions} from '../store/action-creators/auth'
import {teamsActions} from '../store/action-creators/teams'
import {modalsActions} from '../store/action-creators/modals'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...navActions,
        ...authActions,
        ...teamsActions,
        ...modalsActions,
        },
        dispatch)
}