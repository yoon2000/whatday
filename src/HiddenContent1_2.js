// HiddenContent1.js
import React from 'react';
import ProgressBar from './component/ProgressBar_2';
import headerImage from './image/Whatday2.png';

export default function HiddenContent1() {
  return (
    <>
      <header>
        <h1>
          <img src={headerImage} alt="로고" />
        </h1>
      </header>
      <ProgressBar />
    </>
  );
}
