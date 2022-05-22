import LoginPage from '../pages/LoginPage'
import {RoutesTypes} from './types/routesTypes'
import RegistrationPage from '../pages/RegistrationPage'
import UserPage from '../pages/UserPage'
import TodosPage from '../pages/TodosPage'
import HomePage from '../pages/HomePage'
import TeamsPage from '../pages/TeamsPage'

export const generalRoutes: RoutesTypes[] = [
    {path: '/', component: HomePage, shortName: 'Home'},
    {path: '/user', component: UserPage, shortName: 'Personal Page'},
    {path: '/teams', component: TeamsPage, shortName: 'My Teams'},
]

export const toolsRoutes: RoutesTypes[] = [
    {path: '/todos', component: TodosPage, shortName: 'Team Routines'},
]

export const privateRoutes: RoutesTypes[] = [
    ...generalRoutes,
    ...toolsRoutes
]

export const publicRoutes: RoutesTypes[] = [
    {path: '/', component: HomePage, shortName: 'Home'},
    {path: '/login', component: LoginPage, shortName: 'Login Page'},
    {path: '/registration', component: RegistrationPage, shortName: 'Registration Page'},
]
