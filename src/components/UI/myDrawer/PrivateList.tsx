import React, {FC} from 'react'
import {generalRoutes, toolsRoutes} from '../../../router/routes'
import {List} from 'reactstrap'
import RoutesListGroup from './RoutesListGroup'

const PrivateList: FC = () => {

    return (
        <List>
            <RoutesListGroup routes={generalRoutes}/>
            <hr/>
            <RoutesListGroup routes={toolsRoutes}/>
        </List>
    )
}

export default PrivateList