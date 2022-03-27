import React from 'react';

// 조건부렌더링 : props isSpecial에 따라 결과 렌더링
function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color,
      }}
    >
      {/* 삼항연산자 사용 : 보통 내용, 값이 달라져야할 때 사용함, 보여줘야하는 값이 다를 때 사용   */}
      {/* {isSpecial ? <b>*삼항연산자*</b> : null} */}
      <b>{isSpecial ? '삼항연산자인가요?' : '삼항연산자가 아닌가요?'}</b>
      {/* &&연산자 사용: 참 거짓 조건부 렌더링은 &&연산자 사용이 좀 더 간편함  */}
      {isSpecial && <b>&&</b>}
      {/* 참고 : jsx에서 falsy한 값 중 null, undefined, false는 렌더링 되지 않지만 0은 렌더링 됨  */}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
