import { useReducer } from "react";

function reducer(state, action){ // state는 현재값, 즉 초기값
    switch (action.type) {
        case "INCREMENT":
            return {value: state.value + 1};
        case "DECRMENT":
            return {value: state.value - 1};
        default:
            return state;    
    }
}
const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {value : 0}); // 현재는 state의 value가 0
    // action 값이 반환 된게 dispatch
    return (
        <div>
            <h1>{state.value}</h1>

            <button onClick={() => {dispatch({type: "DECRMENT"})}}>-1</button>
            <button onClick={() => {dispatch({type: "INCREMENT"})}}>+1</button> 
        </div>
    )
}

export default Reducer;