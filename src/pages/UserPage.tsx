import React, {FC, useEffect} from 'react'
import {useActions} from '../hooks/useActions'

const UserPage: FC = () => {
    const {setSelectedPage} = useActions()
    useEffect(()=>{
        setSelectedPage('Personal Page')
    },[])
    return (
        <div>
            user page
        </div>
    )
}

export default UserPage