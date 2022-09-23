import React, { Component } from 'react';

class StateClass extends Component {
    /*constructor(props) { // constructor는 기존 버젼
        super(props);

        this.state = {
            name: "SeSAC",
            list: ['s','e','s','a','c']
        };
    }*/
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