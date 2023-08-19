// HiddenContent2.js
import React, {useState} from 'react';
import ProgressBar from './component/ProgressBar';
import ChromeDinoGame from 'react-chrome-dino';

export default function HiddenContent2() {

  const [station, setStation] = useState("정류장 선택");

  return (
    <>
      <h2>
        <a>{station}</a>
      </h2>
      <div className="dino">
        <ChromeDinoGame />
      </div>
    </>
  );
}
