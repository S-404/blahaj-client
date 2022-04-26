import LoginPage from '../pages/LoginPage'
import {RoutesTypes} from './types/routesTypes'
import RegistrationPage from '../pages/RegistrationPage'
import UserPage from '../pages/UserPage'
import TodosPage from '../pages/TodosPage'
import HomePage from '../pages/HomePage'


export const privateRoutes: RoutesTypes[] = [
    {path: '/user', component: UserPage, shortName: 'Personal Page'},
    {path: '/todos', component: TodosPage, shortName: 'Team Routines'},
    {path: '/', component: HomePage, shortName: 'Home'},
]

export const publicRoutes: RoutesTypes[] = [
    {path: '/login', component: LoginPage, shortName: 'Login Page'},
    {path: '/registration', component: RegistrationPage, shortName: 'Registration Page'},
    {path: '/', component: HomePage, shortName: 'Home'},
]
