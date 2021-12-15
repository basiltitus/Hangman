import React from 'react'
import './Hangman.css'
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
class  Hangman extends React.Component{
    renderSwitch() {
        switch(this.props.status) {
          case 0:
            return <img src="https://cdn0.iconfinder.com/data/icons/emoji-17/474/happy-2-512.png" alt="hangmantemp1-removebg-preview" border="0" />;
          case 1:
              return <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Face_Emoji_87fdae9b-b2af-4619-a37f-e484c5e2e7a4_large.png" alt="hangmantemp2-removebg-preview" border="0" />;
          case 2:
              return <img src="https://cdn0.iconfinder.com/data/icons/emoticons-round-smileys/137/Emoticons-14-512.png" alt="hangmantemp3-removebg-preview" border="0"></img>
              case 3:
              return <img src="http://cdn.shopify.com/s/files/1/1061/1924/products/5_grande.png?v=1571606116" alt="hangmantemp3-removebg-preview" border="0"></img>
              case 4:
                
                  return <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1571606037" alt="hangmantemp5-removebg-preview" border="0" />
                  case 5:
                  return <img src="https://assets.wprock.fr/emoji/joypixels/512/1f622.png" alt="hangmantemp4-removebg-preview" border="0"></img>
              case 10:
              return <>
                <img  src="https://cdn.shopify.com/s/files/1/1061/1924/products/Crying_Emoji_Icon_2_large.png" alt="hangmantemp6-removebg-preview" border="0"></img>
             <br/> <h3 className='text-center'> Better Luck Next Time</h3>
              </>
              case 100:
              return <>
<img src="https://media0.giphy.com/media/ie822LA39sLOOFy5qN/source.gif" alt="hangmantemp6-removebg-preview" border="0"></img>
<br/> <h3 className='text-center'> Congratulations You won!</h3>
              </> 
              default:
            return 'foo';
        }
    }
    render(){
        return(
            <Container>

            <Container className='text-right mt-2'>
                {this.props.status<7 && <span>No of attempts left : {6-this.props.status }</span>}
            </Container>
            
            <Container>
            {this.renderSwitch()}
            </Container>
            </Container>
            );
    }
}
function mapStateToProps(state){
    return {
        status:state.StatusReducer
    }
    }
export default connect(mapStateToProps,null) (Hangman);