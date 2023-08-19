// HiddenContent2.js
import React from 'react';
import ProgressBar from './component/ProgressBar';
import ChromeDinoGame from 'react-chrome-dino';

export default function HiddenContent2() {
  return (
    <>
      <h2>
        <a>정류장 선택</a>
      </h2>
      <div className="dino">
        <ChromeDinoGame />
      </div>
    </>
  );
}
