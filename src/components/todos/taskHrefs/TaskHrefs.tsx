import React, {FC} from 'react'
import {Button, Card, CardBody, CardHeader, CardTitle} from 'reactstrap'
import TaskHrefsList from './TaskHrefsList'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import MyModal from '../../UI/MyModal'
import NewHrefForm from './NewHrefForm'
import {useActions} from '../../../hooks/useActions'
import EditHrefForm from './EditHrefForm'


const TaskHrefs: FC = () => {
    const {selectedTask} = useTypedSelector(state => state.tasks)
    const {newTaskHrefModal, editTaskHrefModal} = useTypedSelector(state => state.modals)
    const {setNewTaskHrefModal, setEditTaskHrefModal} = useActions()

    const addButtonHandler = () => {
        setNewTaskHrefModal(true)
    }

    const setVisibleNewTaskHref = (value: boolean) => {
        setNewTaskHrefModal(value)
    }

    const setVisibleEditTaskHref = (value: boolean) => {
        setEditTaskHrefModal(value)
    }

    return (
        <Card>
            <MyModal
                visible={newTaskHrefModal}
                setVisible={setVisibleNewTaskHref}
                title={'Add Link'}
                children={<NewHrefForm/>}
            />

            <MyModal
                visible={editTaskHrefModal}
                setVisible={setVisibleEditTaskHref}
                title={'Edit Link'}
                children={<EditHrefForm/>}
            />

            <CardHeader className="d-flex flex-row justify-content-between">
                <CardTitle>Links:</CardTitle>
                <Button
                    type="button"
                    size="sm"
                    onClick={addButtonHandler}
                >
                    Add
                </Button>
            </CardHeader>
            <CardBody>
                <TaskHrefsList
                    hrefs={selectedTask.taskHrefs}
                />
            </CardBody>
        </Card>
    )
}

export default TaskHrefs