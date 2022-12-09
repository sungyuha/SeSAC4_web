import './App.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import {HTMLInputElement, createRef, useRef } from 'react';

type State = {
    money: string;
}

type Action = {
    type: string;
    money: string;
}

// type Pet = Cat | Fish;
const initState = { money: 0 };
function reducer(state:state = initState, Action:action){
    const newState = {...state};
    if ( action.type === 'DEPOSIT' ) {
        newState.money += parseInt(action.money);
    } else if ( action.type === 'WITHDRAW' ) {
            newState.money -= parseInt(action.money);
    }

    return newState;
}
const store = createStore(reducer, composeWithDevTools());

function Practice() {
  return (
    <Provider store={store}>
        <Balance/>
        <Button />
    </Provider>
    );
}
const Balance = () => {
  const money = useSelector((state: State) => state.money);
  return (
        <div style={{textAlign: 'center'}}>
            <h1>코딩온 은행</h1>
            <h3>잔액 : {money}원</h3>
        </div>
    )
}

const Button = () => {
    const inout = useRef<HTMLInputElement>(null); // Ref 사용할 때 - 요소와 null 사용해야 함
    //const input = createRef();
    const dispatch = useDispatch();
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" ref={input} /> {/* ref 오류사항 확인 필요 */}
            <button onClick={()=>{dispatch({type: 'DEPOSIT', money: input.current.value})}}>입금</button>
            <button onClick={()=>{dispatch({type: 'WITHDRAW', money: input.current.value})}}>출금</button>
        </div>
    )
}

export default Practice;