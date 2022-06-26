import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    let[a, setA] = useState(1)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHandler0 = () => {
        setA(a = 0)
        console.log(a)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler0}>0</button>
        </div>
    );
}

export default App;
