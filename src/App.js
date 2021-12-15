import './App.css';
import React from 'react'
import WelcomeScreen from './Components/WeclomeScreen/WelcomeScreen'
import GameScreen from './Components/GameScreen/GameScreen'
import { connect } from 'react-redux';
import {StatusInit,ClearAnswer} from './Redux/Actions'
import { bindActionCreators } from 'redux';

function App(props){
const [gamestarted,setGamestarted]=React.useState(false);
function stopGame(){
  setGamestarted(false);
  props.ClearAnswer();
  props.StatusInit();
}
  return (
    gamestarted?<GameScreen stopGame={stopGame} />:<WelcomeScreen startgame={()=>{setGamestarted(true)}}/>
 );
  }
  function mapDispatchToProps(dispatch){
    return bindActionCreators({StatusInit,ClearAnswer},dispatch)
    }
  export default connect(null,mapDispatchToProps) (App);
