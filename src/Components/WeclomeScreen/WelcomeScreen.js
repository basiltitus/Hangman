import React from 'react'
import './WelcomeScreen.css'
import { connect } from 'react-redux';
import {ChangeDifficultyEasy,ChangeDifficultyMedium,ChangeDifficultyHard} from '../../Redux/Actions'
import { bindActionCreators } from 'redux';
import Title from './Title';
import { Button,Container } from 'react-bootstrap';
import DifficultySelectorModal from './DifficultySelectorModal'
class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            modalShow:false
        }
    }
    render(){
        return (
            <div>
            <DifficultySelectorModal startGame={()=>{this.props.startGame()}} show={this.state.modalShow} onHide={() => this.setState({modalShow:false})} />
           <Title /> 
           <Container fluid className="startContainer">
           <Button variant='outline-danger' className="startBtn" onClick={()=>{this.setState({modalShow:true})}}>Start</Button>
           </Container>
          
          </div>
        )
    }
}

    function mapDispatchToProps(dispatch){
    return bindActionCreators({ChangeDifficultyEasy,ChangeDifficultyMedium,ChangeDifficultyHard},dispatch)
    }
    export default connect(null,mapDispatchToProps) (WelcomeScreen);
