import React, {FC} from 'react'
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import {MyModalProps} from './types/myModalTypes'


const MyModal: FC<MyModalProps> = ({setVisible, visible, title, children}) => {
    return (
        <Modal
            size="md"
            toggle={() => setVisible(false)}
            isOpen={visible}
        >
            <ModalHeader
                toggle={() => setVisible(false)}
            >
                {title}
            </ModalHeader>

            <ModalBody>
                {children}
            </ModalBody>

        </Modal>
    )
}

export default MyModal