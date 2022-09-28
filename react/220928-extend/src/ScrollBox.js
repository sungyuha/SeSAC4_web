import React, { Component } from 'react';

class ScrollBox extends Component {
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
            background: 'linear-gradient(white, black)'
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
export default ScrollBox;