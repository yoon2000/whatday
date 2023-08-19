import React, { useState, useEffect } from 'react';
import busImage from './image/bus.png';
import stopImage from './image/stop.png';
import WhatdayImage from './image/Whatday2.png';
import Main from './Main';

function Page1() {
  const [showPage2, setShowPage2] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [animateImage2, setAnimateImage2] = useState(false); // 추가 애니메이션 상태
  const [showAppearImage, setShowAppearImage] = useState(false);

  useEffect(() => {
    setAnimateImage(true);

    setTimeout(() => {
      setAnimateImage2(true); // 첫 번째 애니메이션이 끝난 후 0.3초 기다린 뒤 두 번째 애니메이션 시작
    }, 2300);

    setTimeout(() => {
      setShowAppearImage(true);
    }, 4300); // 두 번째 애니메이션이 끝난 후에 이미지가 나타나도록 시간을 조절합니다.

    setTimeout(() => {
      setShowPage2(true);
    }, 5600);
  }, []);

  if (showPage2) {
    return <Main />;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: '-20%',
        right: '0%',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <div>
        <img
          src={busImage}
          style={{
            width: '100%',
            height: '230px',
            top: '70%',
            transform: !animateImage
              ? 'translateX(0)'
              : animateImage2
              ? 'translateX(150%)' // 이동거리 증가
              : 'translateX(50%)',
            transition: 'transform 2s',
          }}
        />
        <img
          src={WhatdayImage}
          style={{
            position: 'absolute',
            width: '500px',
            marginLeft: '4%',
            top: '-100%',
          }}
        />
        <img
          src={stopImage}
          style={{
            position: 'absolute',
            left: '26%',
            right: '0%',
            top: '50%',
            width: '150px',
          }}
        />
      </div>
    </div>
  );
}

export default Page1;
