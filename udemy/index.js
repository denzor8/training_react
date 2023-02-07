import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const text = 'Hello world!'

const elem =(
    // 'h2', { className: 'hello' }, 'Hello World!',
    <div>
        <h2>Text:{ text}</h2>
        <input type="text"/>
        <button> Send</button>
    </div>
);

// const element = {
//     type: 'h2',
//     props: {
//         className: 'hello',
//         children: 'Hello World!'
//     }
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    elem,
    <App />
);
