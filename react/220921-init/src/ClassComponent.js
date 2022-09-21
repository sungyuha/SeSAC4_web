import React, { Component } from "react";
import Proptypes from 'prop-types';

class classComponent extends Component {
    return() {
        <div>
            {props.children}
            <h2>ClassComponent - function</h2>
            <h5>name : {this.props.name}</h5>
            <h5>location : {this.props.location}</h5>
        </div>
    }

    static propTypes = {
        name: Proptypes.string
    }
}
// function ClassComponent (props){
    // return (
    //     <div>
    //         {props.children}
    //         <h2>ClassComponent - function</h2>
    //         <H5>name : {props.name}</H5>
    //         <h5>location : {props.location}</h5>
    //     </div>
    // )
// }

ClassComponent.defaultProps = {
    name : '기본이름',
    location : '기본위치'
}
// ClassComponent.propTypes = {
//     name: Proptypes.string
// }

export default ClassComponent;
// class는 render라는 함수 안에 리턴해야 한다.