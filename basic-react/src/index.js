import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

/*
This object can not be directly used in render function.
As it is made by taking naming convention by our own.
But React's render method has other props to take.

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click to visit Google."
}
*/

// This object will work in root.render as it is written according to React jsx.
const anotherElement = (
    <a href="https://google.com" target="_blank" rel="noreferrer">Click me to visit Google using normal JSX</a>
)

// Object created using React's React.createElement ... works perfectly
const newElement = React.createElement (
    'a',
    {
        href: "https://google.com",
        target: "_blank"    
    },
    "Click me to visit Google. using React.createElement"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {anotherElement}
        <br/>
        {newElement}
    </React.StrictMode>
);
