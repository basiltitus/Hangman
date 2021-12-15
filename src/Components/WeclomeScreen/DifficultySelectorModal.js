import React from 'react'
import {Modal,Button, Container} from 'react-bootstrap'
import DifficultyBtn from './DifficultyBtn'
import { connect } from 'react-redux';
import {ChangeDifficultyEasy,ChangeDifficultyMedium,ChangeDifficultyHard} from '../../Redux/Actions'
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
             <DifficultyBtn text="Easy" onClick={()=>{this.props.ChangeDifficultyEasy();this.props.startGame()}}/>
          <DifficultyBtn text="Medium" onClick={()=>{this.props.ChangeDifficultyMedium();this.props.startGame()}}/>
          <DifficultyBtn text="Difficult" onClick={()=>{this.props.ChangeDifficultyHard();this.props.startGame()}}/>
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
    return bindActionCreators({ChangeDifficultyEasy,ChangeDifficultyMedium,ChangeDifficultyHard},dispatch)
    }
    export default connect(null,mapDispatchToProps) (DifficultySelectorModal);