import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  console.log('create user');
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
// * React.memo 함수
// - 컴포넌트 리렌더링 불필요할 경우 이전 렌더링 결과 재사용
// - 컴포넌트 리렌더링 최적화
// - props가 바뀌었을 때만 리렌더링됨

export default React.memo(CreateUser);
