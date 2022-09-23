import React, { Component } from 'react';

class StateClass extends Component { // state란 컴포넌트 내부에서 바뀔 수 있는 값
    /*constructor(props) { // constructor는 기존 버젼
        super(props);

        this.state = {
            name: "SeSAC",
            list: ['s','e','s','a','c']
        };
    }*/ // props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값
    // 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용 가능
    state = { // 최신문법 -> 구조체를 사용하지 않고도 사용 가능
        name: "SeSAC",
        cnt: 0,
        list: ['s','e','s','a','c'] 
    };
    
    render(){
        return(
            <div>
                <div>{this.state.name} StateClass {this.state.cnt}</div>
                <button onClick={()=>{ 
                    // this.setState({name: "청년취업사관학교", cnt: this.state.cnt + 1});
                    // this.setState({name: "영등포 캠퍼스", cnt: this.state.cnt + 1});
                    this.setState(prevState => { // setState 안에 함수 설정해야 함
                        return {cnt: prevState.cnt + 1}
                    });
                    this.setState(prevState => {
                        return {cnt: prevState.cnt + 1}
                    });
                }}>클릭</button>
                <button onClick={()=>{ this.setState({list: ['c','l','i']})}}>클릭2</button>
                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li> // map은 반복문을 돌릴 때 사용하는 함수
                    })}
                </ul>
            </div>
        )
    }
}
export default StateClass;

// var car = new Car();
// car1.getName();
// car1.name;
/*class Car {
    constructor(){
        this.name = "자동차";
    }
}*/