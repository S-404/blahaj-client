import React, {useEffect} from 'react'
import {useActions} from '../hooks/useActions'

const TodosPage = () => {
    const {setSelectedPage} = useActions()
    useEffect(()=>{
        setSelectedPage('Team Routines')
    },[])
    return (
        <div>
            Todos
        </div>
    )
}

export default TodosPage