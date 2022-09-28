import React, { Component } from 'react';

class Scroll extends Component {
    scrollBottom = () => {
        const {scrollHeight, clientHeight} = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    
    render() {
        const style={
            border: '1px solid black',
            height: '400px',
            width: '400px',
            overflow: 'auto',
            position: 'relative'
        };
 
        const innerStyle={
            width: '100%',
            height: '700px',
            background: 'linear-gradient(white, purple)'
        }
 
        return(
            <div
                style={style}
                ref={(ref) => {this.box=ref}}
            >
                <div style={innerStyle}></div>
            </div>
        );
    }
}

/* const {scrollHeight, clientHeight} = this.box;
 
다음 코드와 같은 의미입니다.
const scrollHeight = this.box.scrollHeight;
const clientHeight = this.box.clientHeight;*/

export default Scroll;