import React, { Component } from 'react';
 
class Refsample extends Component {
    input = React.createRef(); // ref를 만들려면 컴포넌트 내부에서 변숭에 React.createRef()를 담아야 함
 
    handleFocus = () => {
        this.input.current.focus();
    }
 
    render() {
        return (
            <div>
                <input ref={this.input} /> {/* 해당 변수를 ref를 달고자 하는 요소에 refprop로 넣어주면 ref설정이 완료 */}
                {/* 그리고 ref를 DOM에 접근하려면 this.input.current를 조회 */}
            </div>
        );
    }
}
 
export default Refsample;