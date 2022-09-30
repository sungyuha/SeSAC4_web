import { useState, useMemo, useCallback, useRef,useEffect } from "react";

function getAverage(list) {
    console.log("getAverage");
    var sum = 0;
    if (list.length == 0) return sum;
    for ( let i = 0; i < list.length; i++ ){
        sum = sum + list[i];
    }
    return sum / list.length;
}

const HookRef = () => {
    // console.log("memo");
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const input = useRef(null);

    const onChange = useCallback(e => { // onChange는 한 번 렌더링 할때 한 번만 사용
        setNum(e.target.value);
    }, []); // useCallback을 통해서 함수를 반환함

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(num));
        setList(nextList); 
        setNum("");
        input.current.focus();
    }, [num, list]); // useCallback은 재 렌더링 할때 함수를 기억해서 호출함

    //const avg = getAverage(() => getAverage(list), [list]); // 내가 원하는 값이 바뀔때 getAverage(list)를 실행해라 
    const [avg, setAvg] = useState(0);
    useEffect(() => {
        setAvg(getAverage(list));
    }, [list]); // 연산 된 값을 기억하게 그리고 값을 반환
    return (
        <div>
            <input value={num} onChange={onChange} ref={input} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v, i) => {
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값: {getAverage(list)}</b>
            </div>
        </div>
    )
}

export default HookRef;