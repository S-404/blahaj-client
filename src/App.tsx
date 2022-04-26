import React, {useEffect} from 'react'
import {BrowserRouter as Router,} from 'react-router-dom'
import {useTypedSelector} from './hooks/useTypedSelector'
import {useActions} from './hooks/useActions'
import AppRouter from './router/appRouter'
import MyNavbar from './components/UI/myNavBar/MyNavbar'
import './styles/App.css'


function App() {

    const {checkAuth} = useActions()
    const {refreshLoading} = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    if (refreshLoading) return <div>Loading...</div>

    return (
        <Router>
            <MyNavbar/>
            <AppRouter/>
        </Router>
    )
}

export default App
