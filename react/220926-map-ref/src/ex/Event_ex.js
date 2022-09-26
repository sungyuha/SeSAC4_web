import React, { useState } from 'react';

const Event_ex = () => {
    const[info, setInfo] = useState([
        { id: 1, text: '코디' , email: 'codi@gmail.com'},
        { id: 2, text: '윤소희', email: 'yoonsohee@gmail.com' }
    ]);

    const [nextId, setNextId] = useState(5);
    const [inputText, setInputText] = useState( '' );
    const [inputEmail, setEmail] = useState( '' );

    const onChangename = (e) => setInputText(e.target.value);
   
    const Changename = (e) => setEmail(e.target.value);

    const Click = () => {
        const nextEmail = info.concat({
            id: nextId,
            text: inputText,
            email: inputEmail

        });
        setNextId(nextId + 1);
        setInfo(nextEmail);
        setInputText( '' );
        setEmail( '' );
    }

    const nextEmail = info.map(info => <li key={info.id}>{info.text}:{info.email}</li>);
    return (
        <div>
            <input placeholder="이름" value={inputText} onChange={onChangename}></input>
            <input placeholder="이메일" value={inputEmail} onChange={Changename}></input>
            <button onClick={Click}>등록</button>

            <ul>
                {nextEmail}
            </ul>
        </div>
    );
};

export default Event_ex;