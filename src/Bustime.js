import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bustime.css';

function BusInfo() {
  const [busNumber, setBusNumber] = useState('');
  const navigate = useNavigate();

  function handleClick(e) {
    navigate('/main2');
  }

  return (
    <div>
      <h1>지금 운행중인 버스 정보</h1>
      <button className="button" onClick={(e) => {
          handleClick(e);
        }
      }>
        1213번 버스: 현재 위치 - 서울역, 다음 정류장 - 남산{' '}
        <span className="time">(3분전)</span>
      </button>
      <br/>
      <br/>
      <button className="button" onClick={() => navigate("/main2")}>
        7211번 버스: 현재 위치 - 강남역, 다음 정류장 - 양재역{' '}
        <span className="time">(3분전)</span>
      </button>
      {busNumber === '1213' && (
        <div>
          <h3>1213번 버스 정보</h3>
          <p>현재 위치 - 서울역, 다음 정류장 - 남산</p>
          <p>첫차 - 05:30, 막차 - 23:40</p>
        </div>
      )}
      {busNumber === '7211' && (
        <div>
          <h3>7211번 버스 정보</h3>
          <p>현재 위치 - 강남역, 다음 정류장 - 양재역</p>
          <p>첫차 - 06:00, 막차 - 24:00</p>
        </div>
      )}
    </div>
  );
}

export default BusInfo;
