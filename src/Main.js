// App.js
import React, { useState, useEffect } from 'react';
import HiddenContent1 from './HiddenContent1';
import HiddenContent2 from './HiddenContent2';
import Map from './Map';
import './App.css';
import busImage from './image/bus.png';
import stopImage from './image/stop.png';
import { useLocation } from 'react-router-dom';

function App() {
  const [showHiddenContent, setShowHiddenContent] = useState(false);
  const [marginTop, setMarginTop] = useState('23.5%');
  const [showMap, setShowMap] = useState(false);
  const location = useLocation();
  const userInfo = { ...location.state };
  console.log(userInfo.time);

  function handleClick() {
    setShowMap(true);
  }

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowHiddenContent(true);
      setMarginTop('0%');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showMap) {
    return <Map />;
  }

  return (
    <div>
      {showHiddenContent && <HiddenContent1 />}
      <div
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          onClick={handleClick}
          style={{
            marginTop: marginTop,
            backgroundColor: 'transparent',
            width: '300px',
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={busImage} className="bus" />
          <img
            src={stopImage}
            style={{
              width: '70px',
              height: 'auto',
              marginTop: '15px',
              marginRight: '10px',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
      {showHiddenContent && <HiddenContent2 />}
    </div>
  );
}

export default App;
