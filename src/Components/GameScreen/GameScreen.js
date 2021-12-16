import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap';
import './GameScreen.css'
import Hangman from  './Hangman'
import PlayArea from './PlayArea';
import { connect } from 'react-redux';
import {StatusInit,ClearAnswer} from '../../Redux/Actions'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

class GameScreen extends React.Component{
    constructor(){
        super();   
        this.state={
            QuestionNumber:Math.floor(Math.random()*10),
            width:'1350px',
            height:'600px',
            showCoffetti:false
        }
    }
  componentDidUpdate(prevProps){
if(this.props.Status!=prevProps.Status){
    if(this.props.Status==100){
    this.setState({showCoffetti:true})
        
}else{
    this.setState({showCoffetti:false})
}
}
  }
    restartGame(){
        // console.log("clicked")
    this.setState({QuestionNumber:Math.floor(10*Math.random())});
    this.props.StatusInit();
    this.props.ClearAnswer();
    
    }
    render(){
        
        return (
            <Container fluid>
            <Confetti className={this.state.showCoffetti?'show':'hide'}
      width={this.state.width}
      height={this.state.height}
    />
                <Row>
                    <Col className='topBar'>
                    <Button size='sm' className='backgroundcolor-primary' onClick={this.restartGame.bind(this)}>Restart <i class="fas fa-retweet"></i></Button>
                     <Button size='sm' className='exitBtn' variant='primary'>Exit<i className="fas fa-times closeBtn" onClick={this.props.stopGame}></i></Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='borderedCol' lg>
                    <PlayArea Questions={this.props.Questions} QuestionNumber={this.state.QuestionNumber}/>
                    </Col>
                    <Col lg>
                    
    <Hangman />
    </Col>
                </Row>

            </Container>

        );
    }
}
function mapStateToProps(state){
    return {
       Questions:state.Questions,
       Status:state.StatusReducer
 }}
export default connect(mapStateToProps,{StatusInit,ClearAnswer}) (GameScreen);