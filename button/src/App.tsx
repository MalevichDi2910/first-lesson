import React, { MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/button';

function App() {
  // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
  //     return alert('Hello! I am VASYA')
  // }
  //
  // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
  //     return alert('Hello! I am IVAN')

  // const onClickHandler = (name: string) => {
  //   alert(name);
  // };

  const Button1Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age);
  };

  const Button2Foo = (subscriber: string, age: number) => {
    console.log(subscriber, age);
  };

  const Button3Foo = () => {
    console.log('I stupid button');
  };

  return (
    <div>
      <Button
        name={'MyYouTubeChanel-1'}
        callBack={() => Button1Foo('Im Vasya!', 21)}
      />
      <Button
        name={'MyYouTubeChanel-2'}
        callBack={() => Button2Foo('Im Ivan!', 20)}
      />

      <Button name={'MyYouTubeChanel-3'} callBack={Button3Foo} />
    </div>
  );
}

export default App;
