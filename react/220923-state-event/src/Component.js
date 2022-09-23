import React, { Component } from 'react';
 
class Event extends Component {
    state = {
        message: "",
        message: ""
    }

    /*constructor(props) {
        super(props);
        this.eventChange = this.eventChange.bind(this);
        this.eventClick = this.eventClick.bind(this);
        // bind는 thisrk 현재 컴포넌트, 즉, 컴포넌트 자신을 제대로 가리키기 위해 사용
        // 함수가 호출될 때 this는 호출 부에 따라 결정 되는데, 임의 메서드가 특정 html요소의 이벤트로 등록 되면서 메서드와 this의 관계가 끊어지게돼
        // 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신을 가리키게 하기 위해서 메서드를 this와 바인딩하는 작업 필요
        // 바인딩을 하지 않으면 this는 undefined를 값을 가지게 됨
        // constructor 함수에서는 함수를 바인딩하는 작업을 하고 있는 것 
    }*/
 
    eventChange(e) {
        this.setState({
            // message: e.target.value
            [e.target.name]: e.target.value
        });
    }
 
    eventClick() {
        //alert(this.state.message);
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: ""
        });
    }

    render() {
        return (
            <div>
                <h1>리액트의 이벤트!!</h1>

                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    value = {this.state.message}
                    onChange={this.eventChange}
                        /*(e) => {
                            this.setState({
                                message : e.target.value
                            })
                            // console.log(e.target.value);
                            // onChange 이벤트 발생 할때, 인폿 값의 변화를 보고 싶으면
                        }
                    }*/
                />

                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    value = {this.state.message}
                    onChange={this.eventChange}
                />

                <button onClick={this.eventClick}>클릭</button>
                {/* <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({ // 버튼을 클릭하면 alert 함수가 실행되면서  input 값이 메시지로 출력
                            message: ""
                        });
                    }
                }>클릭</button> */}
            </div>
        );
    }
}

export default Event;