import React from 'react'
import { Button } from 'react-bootstrap';
import './AlphabetsBtn.css'
import { connect } from 'react-redux';

class AlphabetBtn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected:false
        }
    }
    componentDidUpdate(prevProps){
        
        if(prevProps.UserAnswer!=this.props.UserAnswer){
            // console.log("updated");
            if(this.props.UserAnswer.includes(this.props.text)){
                this.setState({selected:true})
            }else{
                this.setState({selected:false})
            }
        }
    }
    selectAlphabet(){
        this.props.onClick(this.props.text);
    }
    render(){
        return(
            this.props.Status==100?
            <Button variant='success' className='passAlphaButton'>{this.props.text}</Button>
            :
            this.props.Status==10?
            <Button variant='danger' className='failedAlphaButton'>{this.props.text}</Button>
            :
            this.state.selected?
            <Button variant='secondary' className='inactiveBtn inactiveAlphaButton' >{this.props.text}</Button>:
            <Button variant='primary' className='activeBtn alphaButton' onClick={()=>this.selectAlphabet()}>{this.props.text}</Button>
           
        );
    }
}
function mapStateToProps(state){
    return {
        UserAnswer:state.UserAnswer,
        Status:state.StatusReducer
    }
    }
export default connect(mapStateToProps,null) (AlphabetBtn)