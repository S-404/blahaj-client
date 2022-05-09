import React, {FC} from 'react'
import TaskList from './TaskList'
import {useActions} from '../../hooks/useActions'
import NewTaskForm from './newTaskForm/NewTaskForm'
import {Button} from 'reactstrap'
import MyModal from '../UI/MyModal'
import {useTypedSelector} from '../../hooks/useTypedSelector'

const Tasks: FC = () => {

    const {newTaskModal} = useTypedSelector(state => state.modals)
    const {setNewTaskModal} = useActions()

    const addTaskButtonHandler = () => {
        setNewTaskModal(true)
    }

    return (
        <div>
            <MyModal
                title={`New Task`}
                setVisible={setNewTaskModal}
                visible={newTaskModal}
            >
                <NewTaskForm/>
            </MyModal>

            <Button
                onClick={addTaskButtonHandler}
            >
                Add task
            </Button>

            <TaskList/>

        </div>
    )
}

export default Tasks