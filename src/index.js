import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChangeColor from './components/ChangeColor';
import reportWebVitals from './reportWebVitals';


function showCircleSingle() {
    let colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    let ran = Math.floor(Math.random() * colors.length);
    return (
        <App bgColor={colors[ran]} />
    )
}

function showCircleMany() {
    let colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
    let randomData = [];
    for (let i = 0; i < colors.length; i++) {
        let ran = Math.floor(Math.random() * colors.length);
        randomData.push(<App key={i + colors[ran]} bgColor={colors[ran]} />)
    }
    return (
        randomData
    )
}

ReactDOM.render(
    <React.StrictMode>
        {/* {showCircleSingle()} */}
        {/* {showCircleMany()} */}
        <ChangeColor/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
