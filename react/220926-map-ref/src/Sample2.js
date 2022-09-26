import React, {useState} from 'react';

const Sample = () => {
    const[names, setNames] = useState([
        { id: 1, text: '청바지' },
        { id: 2, text: '패딩' },
        { id: 3, text: '반팔' },
        { id: 4, text: '운동화' }
    ]);
 
    const [inputText, setInputText] = useState( '' );
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText( '' );
    }
    // onClick 함수 에서는 배열의 내장함수인 concat을 사용하여 새로운 항목을 추가한 배열을 만들고, setNames를 통해 상태를 업데이트
    // 새로운 항복을 추가할 때 객체의 id값은 nextId를 사용하도록 하고, 클릭된 때마다 1씩 증가하도록 코드를 작성
    const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
    return (
        <div>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>

            <ul>
                {namesList}
            </ul>
        </div>
    );
};
// 객체 형태로 이루어진 배열, 그 객체에는 문자열과 고유 id값이 있음
export default Sample;