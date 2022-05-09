import React, {useEffect} from 'react'
import {useActions} from '../hooks/useActions'
import {useTypedSelector} from '../hooks/useTypedSelector'
import TeamSelector from '../components/UI/myToolbar/TeamSelector'
import Tasks from '../components/todos/Tasks'

const TodosPage = () => {

    const {selectedTeam} = useTypedSelector(state => state.nav)

    const {setSelectedPage} = useActions()
    useEffect(()=>{
        setSelectedPage('Team Routines')
    },[])

    if(!selectedTeam.id) return (
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