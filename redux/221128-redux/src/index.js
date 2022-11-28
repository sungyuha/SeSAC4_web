import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

//const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
