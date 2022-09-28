import React, { Component } from 'react';
import Validation from './Validation2';
import './Validation.css';

class App extends Component {
    render() {
      return(
        <Validation3 />
      )
    }
} // App 컴포넌트를 수정하고 브라앚를 열어서 결과를 확인하면 유효성 검사가 제대로 작성함
// state만으로 구현 하지 못하는 것 -> 특정 input에 포커스를 주는 것, 스크롤 박스에 조작하는 것 -> DOM에 접근해야 하는데 이때 ref를 사용!
// ref는 콜백 함수를 사용
class Validation3 extends Component { 
    state = { // state의 초깃값을 지정
        password: "", // password는 공백
        clicked: false, // clicked 는 거짓
        validated: false // validated도 거짓
    }
 
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
 
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === "0000"
        });
        this.input.focus(); 
        // 버튼에서 onClick 이벤트가 발생할 때, input에 포커스를 주도록 수정
        // this.input이 컴포넌트 네부의 input 요소를 가리킴
    }
 
    render() {
        return (
            <div>
                <input 
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
                />
 
                <button onClick={this.handleButtonClick}>검증</button>
            </div>
        );
    }
}
 
export default Validation3;