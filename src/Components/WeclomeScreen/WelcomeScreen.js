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
            <DifficultySelectorModal startgame={()=>{this.props.startgame()}} show={this.state.modalShow} onHide={() => this.setState({modalShow:false})} />
           <Title /> 
           <Container fluid className="startContainer">
           <Button variant='outline-danger' size='lg' className="startBtn" onClick={()=>{this.setState({modalShow:true})}}>Start</Button>
           </Container>
          
          </div>
        )
    }
}

    export default connect(null,null) (WelcomeScreen);
