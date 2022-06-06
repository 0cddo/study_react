import React from 'react';
import { useSearchParams } from 'react-router-dom';

// query 받아오기
const About = () => {
  // location search 값을 읽기 위한 hook
  const [searchParams] = useSearchParams();
  const detail = searchParams.get('detail') === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트 리액트 라우터 기초 실습 프로젝트</p>
      {detail && <p>detail값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
