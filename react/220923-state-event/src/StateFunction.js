import React, {useState} from "react";

function StateFunction () { // 함수형 Component
    const [msg, setMsg] = useState(""); // msg: name 같은 친구, setMsg은 변경하기 위한 함수
    const [list, setList] = useState([]);

    function changeMsg(){
        setMsg("메세지")
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}
export default StateFunction;