import React, { useState } from 'react';

function Counter() {
  // useState를 이용해 바뀌는 값 관리
  // [상태 기본값, 현재 상태를 업데이트하는 값]
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    // setNumber(number + 1);
    //컴포넌트 최적화를 위해 상태 업데이트함수 이용함 (로직 정의)
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    // setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <>
      <h1>{number}</h1>
      {/* 이벤트에 함수를 넣어줘야함, 함수호출 아님 (ex. onIncrease() -> 틀림, 렌더링되면 함수 바로 실행됨) */}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1 </button>
    </>
  );
}

export default Counter;
