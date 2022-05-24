import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  // onChange : input 상태 변화 관리 , onCreate : 새로운 것 생성
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

export default CreateUser;
