import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponent from './ClassComponent';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ClassComponent name = {1} location="문래">문자</ClassComponent>
    <App />
  </>
);

// StrictMode는 경고창과 검사를 사용할 때 사용(약간 개발자 모드 같은거)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-/vitals
// reportWebVitals();

// reportWebVitals 함수는 -> 리액트 어플리케이션의 성능을 측정해줌
