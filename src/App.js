import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  // jsx에 style 입히기
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };
  return (
    // fragment 사용
    <>
      {/* 컴포넌트 일종의 UI 조각 */}
      {/* jsx, 바벨을 이용해 자바스크립트로 변환 */}
      <Hello
      // 이렇게도 주석 작성 가능
      />
      <Hello />
      <Hello />
      {/* jsx 내부에서 자바스크립트 값을 보여주기위해선 {}로 감싼다 */}
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
