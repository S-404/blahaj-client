import React, {FC} from 'react'
import TaskList from './taskList/TaskList'
import {useActions} from '../../hooks/useActions'
import NewTaskForm from './newTaskForm/NewTaskForm'
import {Button,Container} from 'reactstrap'
import MyModal from '../UI/MyModal'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import TaskProperties from './taskProperties/TaskProperties'

const Tasks: FC = () => {

    const {newTaskModal,editTaskModal} = useTypedSelector(state => state.modals)
    const {setNewTaskModal,setEditTaskModal} = useActions()

    const addTaskButtonHandler = () => {
        setNewTaskModal(true)
    }

    return (
        <Container>

            <MyModal
                title={`New Task`}
                setVisible={setNewTaskModal}
                visible={newTaskModal}
                children={<NewTaskForm/>}
            />

            <MyModal
                title={`Task Properties`}
                setVisible={setEditTaskModal}
                visible={editTaskModal}
                children={<TaskProperties/>}
            />

            <Button onClick={addTaskButtonHandler}>
                Add task
            </Button>

            <TaskList/>

        </Container>
    )
}

export default Tasks