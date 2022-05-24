import React from 'react';

function User({ user, onRemove }) {
  // 반복되는 `user.` 추출하기
  const { username, email, id } = user;
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      {/* user.id를 onRemove 함수의 파라미터 값으로 넣어서 onClick 에서 새로운 함수 만듬  */}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </>
  );
}

export default UserList;
