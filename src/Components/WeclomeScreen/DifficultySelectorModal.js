import React from 'react'
import {Modal,Button, Container} from 'react-bootstrap'
import DifficultyBtn from './DifficultyBtn'
import { connect } from 'react-redux';
import {changedifficultyeasy,changedifficultymedium,changedifficultyhard} from '../../Redux/Actions'
import { bindActionCreators } from 'redux'
import './DifficultySelectorModal.css';
class DifficultySelectorModal extends React.Component{
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
                Select Difficulty
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className='blackBckg'>
             <Container className="text-center">
             <DifficultyBtn className='diffBtn' text="Easy" onClick={()=>{this.props.changedifficultyeasy();this.props.startgame()}}/>
          <DifficultyBtn className='diffBtn' text="Medium" onClick={()=>{this.props.changedifficultymedium();this.props.startgame()}}/>
          <DifficultyBtn className='diffBtn' text="Difficult" onClick={()=>{this.props.changedifficultyhard();this.props.startgame()}}/>
             </Container>
            </Modal.Body>
            <Modal.Footer className='blackBckg'>
              Made For Fun!
            </Modal.Footer>
          </Modal>
        );
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({changedifficultyeasy,changedifficultymedium,changedifficultyhard},dispatch)
    }
    export default connect(null,mapDispatchToProps) (DifficultySelectorModal);