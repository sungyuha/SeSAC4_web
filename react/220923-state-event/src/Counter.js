import React, { Component } from "react";
 
class Counter extends Component {
    // constructor(props) {
    //     super(props);
 
        state = {
            number: 0,
            fixedNumber: 0
        };
   
    
    // 화살표 문법
    // onClick={() => { }} -> 이벤트로 설정할 함수를 넣어줄 때는 화살표 함수 문밥을 사용해 넣어주어야 함
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick={() => {
                    //     this.setState({ number: number + 1 });
                    //     this.setState({ number: this.state.number + 1 });
                    // }}
                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 1
                            };
                        });
             
                        //위코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                        //아래 코드는 함수에서 바로 객체를 반환합니다.
             
                        this.setState(prevState => ({
                            number: prevState.number + 1
                        }));
                    }}
                >
                +1
                </button>
            </div>
        );
    };
}

/*
const array = [ 1, 2 ];
const one = array[ 0 ];
const two = array[ 1 ];
배열 비구조화 할당 : 배열 안에 들어있는 값을 쉽게 추출 할 수 있도록 해주는 문법
*/

export default Counter;