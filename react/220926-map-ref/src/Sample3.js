import React, { useState } from 'react';
/*const numbers = [1, 2, 3, 4, 5, 6];
const biggerThanThree = numbers.filter(number => number > 3);*/
// 결과: [4, 5, 6]
 
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
 
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }
 
    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
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

export default Sample;