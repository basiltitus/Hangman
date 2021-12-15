import React from 'react'
import {Button} from 'react-bootstrap'
import './DifficultyBtn.css';
class DifficultyBtn extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Button variant="outline-danger" className='diffBtn' onClick={()=>{this.props.onClick()}}>{this.props.text}</Button>
        );
    }
}

export default DifficultyBtn;