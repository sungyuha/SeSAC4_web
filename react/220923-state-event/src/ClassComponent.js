import React, { Component } from "react";

// 실습 56
class ClassComponent extends Component {
    state = {
        number: 0,
        // fixedNumber: 0
    };

    render() {
        const { number } = this.state;
        return (
            <div>
                <h1>숫자 : {number}</h1>
                {/* <h2>바뀌지 않는 값: {fixedNumber}</h2> */}
                <button
                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + 2
                            };
                        });
                    }}    
                >
                +2
                </button>

                <button
                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number: prevState.number + -1
                            };
                        });
                    }}    
                >
                -1
                </button>
            </div>
        );
    };
}

export default ClassComponent;