import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {

    // type FilterType = 'all' | 'dollars' | 'rubles';

  const [money, setMoney] = useState([
    { banknots: 'dollars', value: 100, number: ' a1234567890' },
    { banknots: 'dollars', value: 50, number: ' z1234567890' },
    { banknots: 'rubles', value: 100, number: ' w1234567890' },
    { banknots: 'dollars', value: 100, number: ' e1234567890' },
    { banknots: 'dollars', value: 50, number: ' c1234567890' },
    { banknots: 'rubles', value: 100, number: ' r1234567890' },
    { banknots: 'dollars', value: 50, number: ' x1234567890' },
    { banknots: 'rubles', value: 50, number: ' v1234567890' },
  ])

  return (
      <>
       <NewComponent money={money}/>
      </>
  );
}

export default App;
