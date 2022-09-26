import React, {Component} from "react";

class EventClass extends Component {

    constructor(props) {
        super ( props );

        this.printConsole = this.printConsole.bind(this);
    }
    printConsole() {
        console.log("printConsole");
        console.log( this );
    }
    printConsole2 = () => {
        console.log("printConsole2");
        console.log( this );
    }
    sendParameter = () => {
        this.printConsole('2')
    }
    render() {
        return (
            <div>
                <button onClick={this.sendParameter}>printConsole</button>
                <button onClick={() => {
                        this.printConsole('2') 
                    }}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
            </div>
        )
    }
}
// class형 컴포넌트 안에서는 this 붙여서
// 화살표 함수 사용하기

export default EventClass;