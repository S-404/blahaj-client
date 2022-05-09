import React, {FC} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import {useActions} from '../../../hooks/useActions'
import {RoutesListGroupProps} from '../types/routesListGroupTypes'


const RoutesListGroup: FC<RoutesListGroupProps> = ({routes}) => {

    const {setIsOpenDrawer} = useActions()

    const toggleHandler = () => {
        setIsOpenDrawer(false)
    }

    return (
        <ListGroup>
            {routes.map((route) => (
                <ListGroupItem
                    tag={Link}
                    to={route.path}
                    key={route.path + route.shortName}
                    onClick={toggleHandler}
                >
                    {route.shortName}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default RoutesListGroup