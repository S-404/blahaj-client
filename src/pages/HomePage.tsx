import React, {useEffect} from 'react'
import {useActions} from '../hooks/useActions'

const HomePage = () => {

    const {setSelectedPage} = useActions()
    useEffect(()=>{
        setSelectedPage('Home')
    },[])

    return (
        <div>
            Home Page
        </div>
    )
}

export default HomePage