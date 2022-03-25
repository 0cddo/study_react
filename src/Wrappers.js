import React from 'react';

// props children 학습
// 자식 컴포넌트를 브라우저에 안보임, 보여주기 위해선 {children} 사용한다
function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: 16,
  };
  // children props로 <Hello /> 컴포넌트를 받아옴 (태그와 태그 사이에 넣는 내용)
  return <div style={style}>{children}</div>;
}

export default Wrapper;
