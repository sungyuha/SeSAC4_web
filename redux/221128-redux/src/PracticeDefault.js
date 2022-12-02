import { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

function reducer(state, action) {
  // state : 현재 상태의 state -> 아직 바뀌기 전
  // action : dispatch를 실행할 때 넣었던 객체
  if ( action.type === 'INCREASE' ){
    return { number: state.number + 1 };
  } else if ( action.type === 'DECREASE' ){
    return { number: state.number - 1}
  }
  return { number: 1};
}

const store = createStore(reducer);
 
function PracticeDefault() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>코딩온 은행</h1>
      <h3>잔액 : 000원</h3>
      <Button />
    </div>
  );
}

const Button = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <input type="text" />
      <button>입금</button>
      <button>출금</button>
    </div>
  )
}

export default PracticeDefault;