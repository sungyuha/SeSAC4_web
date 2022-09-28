import React, { Component } from 'react';
import Validation from './Validation2';
import './Validation.css';

class App extends Component {
    render() {
      return(
        <Validation2 />
      )
    }
} // App 컴포넌트를 수정하고 브라앚를 열어서 결과를 확인하면 유효성 검사가 제대로 작성함
// state만으로 구현 하지 못하는 것 -> 특정 input에 포커스를 주는 것, 스크롤 박스에 조작하는 것 -> DOM에 접근해야 하는데 이때 ref를 사용!
// ref는 콜백 함수를 사용
class Validation2 extends Component { 
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
    }
 
    render() {
        return (
            <div>
                <input // input에서 onChange 이벤트가 발생하면 handleChange를 호출하여 state의 password의 값을 업데이트 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
                    // input의 className 값은 버튼을 누르기 전에는 비어있는 문자열을 전달, 버튼을 누른 후에는 검증 결과에 따라 success 또는 faolure로 설정
                />
 
                <button onClick={this.handleButtonClick}>검증</button>
                {/* onClick 이벤트가 발생하면 handleButtonClick을 호출하여 clicked의 값을 참으로, validated 값을 검증 결과로 설정 */}
            </div>
        );
    }
}
 
export default Validation2;