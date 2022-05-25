import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      // user값 변경 될 때 : 바뀌기 전 값 선 호출 => 바뀐 값 호출
      console.log('user 값이 바뀌기 전');
      console.log(user);
    };
    // `[user]` 값이 변경될 때마다 함수 호출됨 (마운트 될 때도 호출, 업데이트 될 때 호출)
    // useEffect props 또는 useState 받아온 값을 참조할 경우 `[]`가 비어있으면 경고 뜸 (deps 배열을 채워야 [user] 값이 최신의 값을 가져오게 됨)
    // 함수를 참조할 경우에도 deps에 넣어야 제대로 작동함
  }, [user]);

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default UserList;
