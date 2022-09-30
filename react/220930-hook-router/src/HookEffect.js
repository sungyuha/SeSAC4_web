import { useState, useEffect } from "react";
const HookEffect = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName(e.target.value);
    }
    const changeCnt = () => {
        setCnt(cnt+1);
    }
    // useEffect(() => {
    //     console.log("useEffect");
    //     console.log("name :", name);
    // }, [cnt]);
    // componentDidUpdate(prevProps, prevState) {
    //    if (prevState.name != this.state.name) {
    //        // 실행
    //    }
    // }
    useEffect(() => {
        console.log("name1 :", name);
        return () => {
            console.log( "name2: ", name); // 콘솔에 미리 찍히고 name1이 찍힘
        }
    }, [cnt]); // 컴포넌트가 업데이트 되기 직전에 이용하는 함수 : 뒷정리 함수
    return (
        <div class="HookEffect"> {/*  */}
            <div class="box">
                <input value={name} onChange={changeName} />
                <button onClick={changeCnt}>+1</button>
            </div>
            <div>
                <h3>이름 : {name}</h3>
                <h4>횟수 : {cnt}</h4>
            </div>    
        </div>
    )
}
// .HookEffect .box {

// }

export default HookEffect;