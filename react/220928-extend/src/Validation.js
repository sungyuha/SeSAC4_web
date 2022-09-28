import React, { Component } from 'react';
import './Validation.css';
 
class Validation extends Component { 
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
 
export default Validation;