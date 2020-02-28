import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

function ErrorModal(props) {
  return (
    <Modal isOpen={props.isOpen}>
      <ModalBody>{props.text}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => props.close()}>
          OK
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ErrorModal


