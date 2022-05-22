import React, {useEffect} from 'react'
import {useActions} from '../hooks/useActions'
import {useTypedSelector} from '../hooks/useTypedSelector'
import TeamSelector from '../components/UI/myToolbar/TeamSelector'
import Tasks from '../components/todos/Tasks'

const TodosPage = () => {

    const {selectedNavTeam} = useTypedSelector(state => state.nav)

    const {setSelectedPage} = useActions()
    useEffect(()=>{
        setSelectedPage('Team Routines')
    },[])

    if(!selectedNavTeam.id) return (
        <>
            <h5>Choose Your Team</h5>
            <TeamSelector/>
        </>

    )

    return (
        <>
            <Tasks/>
        </>
    )
}

export default TodosPage