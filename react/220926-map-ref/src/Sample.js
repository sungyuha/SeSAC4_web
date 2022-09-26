import React from 'react';
 
const Sample = () => {
    const fashion = ["청바지", "패딩", "반팔", "운동화"];
    const fashionList = fashion.map((fashion, index) => <li key={index}>{fashion}</li>);
 
    return(
        <ul>{fashionList}</ul>
    );
}

// arr.map(callback, [thisArg])
 
// map 함수의 파라미터는 다음과 같습니다.
 
// => callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지 입니다.
// 1) currentValue: 현재 처리하고 있는 요소
// 2) index: 현재 처리하고 있는 요소의 index값
// 3) array: 현재 처리하고 있는 원본 배열
// => thisArg(선택 항목): callback 함수 내부에서 사용할 this 레퍼런스

export default Sample;