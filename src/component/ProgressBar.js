import React, { useState, useEffect, useRef } from 'react';
import Percent from './Percent';
import Circle from './Circle';
import './style.css';

function ProgressBar() {
  const circle = useRef(null);
  const box = useRef(null);
  const [con, setCon] = useState(null);
  const [cir, setCir] = useState(null);
  let h1 = useRef(null);
  const [num, setNum] = useState(null);

  useEffect(() => {
    const conWidth = box.current.getBoundingClientRect().width;
    setCon(conWidth);
    const circleWidth = circle.current.getBoundingClientRect().width;
    setCir(circleWidth);
  }, []);

  let isDragging = null;
  let originX = null;
  let originLeft = null;
  let result;

  const drag = (e) => {
    isDragging = true;
    originX = e.clientX;
    originLeft = circle.current.offsetWidth;
  };
  const move = (e) => {
    if (isDragging) {
      const diffX = e.clientX - originX;
      const endX = con - cir;
      //circle.current.style.left = `${Math.min(Math.max(0, originLeft + diffX),endX)}px`;
      circle.current.style.width = `${Math.min(
        Math.max(0, originLeft + diffX),
        endX
      )}px`;
    }
  };
  const stop = (e) => {
    isDragging = false;
  };
  const getPercent = (e) => {
    result = parseInt(circle.current.offsetWidth / 3.49);
    setNum(result);
    h1.current.innerText = result + '%';
  };

  const init = (e) => {
    let endX = con - cir;
    circle.current.style.width = `${Math.min(
      Math.max(0, e.clientX - e.currentTarget.offsetLeft),
      endX
    )}px`;
  };
  return (
    <div className="container">
      <div className="percent">
        <h1 ref={h1} style={{ fontSize: '24px' }}>
          {' '}
          {/* 원하는 크기로 변경 */}
          0분 뒤 <br />
          버스가 도착합니다.
        </h1>
      </div>
      <div>
        <span
          className="bar"
          onMouseMove={(e) => {
            move(e);
            getPercent(e);
          }}
          ref={box}
          onMouseUp={(e) => {
            stop(e);
            init(e);
          }}
          onMouseLeave={(e) => {
            stop(e);
          }}
        >
          <Circle num={num} />
          <span
            className="progress"
            onMouseDown={(e) => {
              drag(e);
            }}
            ref={circle}
          ></span>

          <Percent />
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
