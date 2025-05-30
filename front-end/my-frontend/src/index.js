import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import { Navbar } from './Navbar';
import Categories from './Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <Navbar/>
    <Categories/>
    <Main/>
    
    
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
