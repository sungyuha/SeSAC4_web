import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import {Provider, useSelector, useDispatch} from 'react-redux';
import { createRef, HtmlHTMLAttributes, useRef } from 'react';

type State  = {
  money: number;
}
type Action = {
  type: string;
  money: string;
}

const initState = { money: 0 };
function reducer(state: State = initState, action:Action){
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
  const input = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <input type="text" ref={input} />
        <button onClick={()=>{
            if ( input.current != null ) dispatch({type: 'DEPOSIT', money: input.current.value})
        }}>입금</button>
        <button onClick={()=>{
            if ( input.current != null ) dispatch({type: 'WITHDRAW', money: input.current.value})
        }}>출금</button>
    </div>
  )
}

export default Practice;


/*const reducer = (AppProps: number) => {
  if ( AppProps === 'INCREASE' ){
    return { number: AppProps.number + 1 };
  } else if ( AppProps === 'DECREASE' ){
    return { number: AppProps.number - 1}
  }
  return { number: 1};
}

const [list, setList] = useState<number[]>([]);

function App() {
  return (
    <div className="App">
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

export default App;*/
