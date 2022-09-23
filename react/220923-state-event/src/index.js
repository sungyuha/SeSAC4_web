import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
/*import StateFunction from './StateFunction';
import Counter from "./Counter";
import Say from './Say';
import Component from './Component';*/
import ClassComponent from './ClassComponent';
import Practice from './Practice';
import Event from './Event';
import EventClass from './EventClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateClass name="Sesac"/>
    {/* <StateFunction />
    <Counter />
    <Say />
    <Component /> */}
    <ClassComponent />
    <Practice />
    <Event />
    <EventClass />
  </React.StrictMode>
);