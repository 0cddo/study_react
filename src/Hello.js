import React from 'react';

// 구조분해할당 사용해서 'props'중복 없애기
function Hello({ color, name }) {
  //   console.log(props);
  //   <div style={{객체}}> -> 객체를 감싸는 {}
  return (
    <div
      style={{
        // color: color, == color 같다!
        color,
      }}
    >
      안녕하세요 {name}
    </div>
  );
}

// 기본 props
Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
