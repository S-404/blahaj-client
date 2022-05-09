import React, {FC} from 'react'
import {publicRoutes} from '../../../router/routes'
import RoutesListGroup from './RoutesListGroup'
import {List} from 'reactstrap'

const PublicList:FC = () => {

    return (
        <List>
            <RoutesListGroup routes={publicRoutes}/>
        </List>
    )
}

export default PublicList