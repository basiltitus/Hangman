import React from 'react'
import './HintModal.css'
import {Modal,Button,Container} from 'react-bootstrap'
class HintModal extends React.Component{
    render(){
        return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='text-white'
          >
            <Modal.Header closeButton className='blackBckg'>
              <Modal.Title id="contained-modal-title-vcenter">
               <b> Hint !</b>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='blackBckg'>
             <Container className="text-center">
             <h5>{this.props.hint}</h5>
             </Container>
            </Modal.Body>
            <Modal.Footer className='blackBckg'>
              Made For Fun!
            </Modal.Footer>
          </Modal>);
    }
}

export default HintModal;