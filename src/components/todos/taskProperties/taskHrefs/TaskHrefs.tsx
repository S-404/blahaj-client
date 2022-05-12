import React, {FC, useState} from 'react'
import {Button, Card, CardBody, CardTitle, CardHeader} from 'reactstrap'
import TaskHrefsList from './TaskHrefsList'
import {useTypedSelector} from '../../../../hooks/useTypedSelector'
import MyModal from '../../../UI/MyModal'
import NewHrefForm from './NewHrefForm'


const TaskHrefs: FC = () => {
    const {selected} = useTypedSelector(state => state.tasks)
    const [newHrefModal, setNewHrefModal] = useState<boolean>(false)
    const addButtonHandler = () => {
        setNewHrefModal(true)
    }
    return (
        <Card>
            <MyModal
                visible={newHrefModal}
                setVisible={setNewHrefModal}
                title={'Add Link'}
                children={<NewHrefForm/>}
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
                    hrefs={selected.taskHrefs}
                />
            </CardBody>
        </Card>
    )
}

export default TaskHrefs