import React from "react";
import { Button, Container } from "react-bootstrap";
import './PlayArea.css'
import AlphabetBtn from './AlphabetBtn'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HintModal from "./HintModal";
import {AddAlphabet,StatusLevelUp,StatusFail,StatusPass} from '../../Redux/Actions'
class PlayArea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Currentquestion:props.Questions[props.QuestionNumber].question,
            showModal:false,
            hint:props.Questions[props.QuestionNumber].hint
        }
        
    }
    componentDidUpdate(prevprops){

        if (this.props.QuestionNumber !== prevprops.QuestionNumber){
        console.log(this.props.QuestionNumber)
        this.setState({Currentquestion:this.props.Questions[this.props.QuestionNumber].question})
    }}
    AddAlphabetFn(text){
        if(this.state.Currentquestion.toUpperCase().includes(text)){
            console.log('correct');
        }else{
            console.log('incorrect');
            if(this.props.status==5)
            this.props.StatusFail();
            else
            this.props.StatusLevelUp();
        }
            this.props.AddAlphabet(text);
    }
    RenderAlphabets(){
        let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var res=[];
        for(var i=0;i<alphabets.length;++i){
            if(alphabets.charAt(i)=="U"){
                res.push(<br />)
            }
               res.push(<AlphabetBtn key={alphabets.charAt(i)} text={alphabets.charAt(i)} onClick={(text)=>{this.AddAlphabetFn(text);}}/>)
               
            }
           
            return res;
        }
    
    RenderQuestion(){
        var outputStr="";
        var UserAnswer=this.props.userAnswer;
        UserAnswer=UserAnswer.toLowerCase()
        var {Currentquestion}=this.state;
        if(this.props.status==10){
            outputStr=Currentquestion;
            return outputStr.toUpperCase();
        }else{
        for (var i = 0; i < Currentquestion.length; i++) {
            if(Currentquestion.charAt(i)==" "){
                outputStr+=" ";
            }
            else if(UserAnswer.includes(Currentquestion.charAt(i)))
            outputStr= outputStr+ (Currentquestion.charAt(i));
            else
            outputStr+="_";
          }
          if(!outputStr.includes("_")){
              this.props.StatusPass();
          }
          return outputStr.toUpperCase();
        }
    }
render(){
return (
<div>
<HintModal show={this.state.showModal} onHide={() => this.setState({showModal:false})} hint={this.state.hint} />
<Container className="questionSet">
<h1>{ this.RenderQuestion() }</h1>
</Container>
<Container className="alphabetBtnSet">
    {this.RenderAlphabets()}
</Container>
{this.props.status>=4&&this.props.status<6&&
<div className="text-right">
<Button variant="outline-primary" className="hintBtn" size="sm" onClick={()=>this.setState({showModal:true})} >Hint?</Button>
</div>
}
</div>
    );
}
}
function mapStateToProps(state){
    return {
        userAnswer:state.UserAnswer,
        status:state.StatusReducer
    }
    }
    function mapDispatchToProps(dispatch){
    return bindActionCreators({AddAlphabet,StatusLevelUp,StatusFail,StatusPass},dispatch)
    }
    export default connect(mapStateToProps,mapDispatchToProps) (PlayArea);