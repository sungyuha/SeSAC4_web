import React, { useState } from 'react';

type AppProps = {
  name: string;
  age?: number; // ?는 옵션 설정, 무조건 아님
}
function App(props:AppProps) { // props의 타입을 지정해 줘야 함
  // useState([]) -> 기본 값
  // useState<number[]> -> 숫자 배열만 받을 수 있는 제네릭
  const [list, setList] = useState<number[]>([]);
  return (
    <div className="App">
      {props.name}
    </div>
  );
}

export default App;
