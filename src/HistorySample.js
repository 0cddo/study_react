import React from 'react';
import { useNavigate } from 'react-router-dom';

const HistorySample = () => {
  const navigate = useNavigate();
  const goBack = () => {
    const confirm = window.confirm('정말 나갈건가요?');
    if (confirm) {
      navigate(-1);
    }
  };

  const goHome = () => {
    navigate('/');
  };
  return (
    <div>
      <h2>useNavigate Hook으로 연습하기</h2>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
};

export default HistorySample;
