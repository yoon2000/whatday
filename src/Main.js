import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './component/ProgressBar';
import './component/style.css';
import './App.css';
import ChromeDinoGame from 'react-chrome-dino';

const btnStyle = {
  color: 'white',
  background: 'green',
  padding: 15,
  //".375rem .75rem",
  border: '1px solid teal',
  borderRadius: '.25rem',
  fontSize: '1rem',

  lineHeight: 1.5,
};

const h1Style = {
  textAlign: 'center',
};

function Header() {
  return (
    <header style={btnStyle}>
      <h1 style={h1Style}>
        <a>왔 데 이</a>
      </h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <br></br>
      <br></br>
      <h2>
        <a>정류장 선택</a>
      </h2>
      <br></br>
      <img src="./img/busstop.png"></img>
      <ProgressBar></ProgressBar>
      <br></br>
      <br></br>
      <div class="dino">
        <ChromeDinoGame />
      </div>
    </div>
  );
}

export default App;
