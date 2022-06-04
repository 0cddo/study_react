import React, { createContext, useContext, useState } from 'react';

// Provider 컴포넌트 사용안하면 기본값 'defaultValue'가 들어감
const MyContext = createContext('defaultValue');

// context API 사용하여 한번에 props 전달하기
//   MyContext.Provider를 통해 value 값 설정, useContext를 통해 값 불러옴

function Child() {
  const text = useContext(MyContext);
  return <div>안녕하세요 ? {text}</div>;
}

function Parent({ text }) {
  return <Child />;
}

function GrandParent({ text }) {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    //   child 컴포넌트에서 바로 MyContext 참조 함
    <MyContext.Provider value={value ? 'kimi' : 'simi'}>
      <GrandParent />
      <button onClick={() => setValue(!value)}>Who r U</button>
    </MyContext.Provider>
  );
}

export default ContextSample;
