import React, { useState } from "react";
 
const Say = () => {
  const [ message, setMessage ] = useState( "" );
  // 함수를 호출하면 배열이 반환
  // 첫 번째 원소는 현재 상태, 두 번째 원소는 상태를 바꿔주는 함수
  const onClickEnter = () => setMessage( "안녕하세요!" );
  const onClickLeave = () => setMessage( "안녕히가세요!" );

  const [color, setColor] = useState("black");
 
  return (
    <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1 style={ {color}}>{message}</h1>

        <button style={{ color: "red" }} onClick={() => setColor("red")}>
            빨간색
        </button>
 
        <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
            파란색
        </button>
 
        <button style={{ color: "orange" }} onClick={() => setColor("orange")}>
            주황색
        </button>
    </div>
    );
};
// state에 함수형 사용 시 주의사항
// state 값을 바꾸어야 할 때는 setState나 useState를 통해 전달 받은 세터 함수를 사용해야 함

/*
// 클래스형 컴포넌트
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;
 
// 함수형 컴포넌트
const [ object, setObject ] = useState( { a: 1, b: 2 } );
object.b = 2;
*/
// props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값 을 업데이트
export default Say;