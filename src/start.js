import React, { useState } from 'react';
import busImage from './image/bus.png';
import Main from './Main';

function Page1() {
  const [showPage2, setShowPage2] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  const handleClickImage = () => {
    setAnimateImage(true);

    setTimeout(() => {
      setShowPage2(true);
    }, 2000);
  };

  if (showPage2) {
    return <Main />;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <button
        onClick={handleClickImage}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        <img
          src={busImage}
          style={{
            transform: animateImage ? 'translateX(100%)' : 'translateX(0)',
            transition: 'transform 2s',
          }}
        />
      </button>
    </div>
  );
}

export default Page1;
