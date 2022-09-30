import React from 'react';
import ReactDOM from 'react-dom/client';
// import HookEffect from './HookEffect';
// import Reducer from './Reducer';
// import Memo from './Memo';
// import HookRef from './HookRef';
import Origin from './Origin';
import UseSass from './UseSass';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';  // StyledComponent 변수명이고 './StyledComponent' 파일 이름

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HookEffect />
    <hr />
    <Reducer />
    <hr />
    <Memo />
    <hr />
    <HookRef /> */}
    <Origin />
    <hr />
    <UseSass />
    <hr />
    <CSSModule />
    <hr />
    <StyledComponent />
    <hr />
  </React.StrictMode>
);
