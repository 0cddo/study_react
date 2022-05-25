import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log(user);
    // deps 배열이 없을 경우 모든 값이 호출됨
    // 리액트에서는 부모 컴포넌트 리렌더링 시, 자식컴포넌트도 리렌더링 됨
    // 브라우저 상에서는 업데이트된 부분만 바뀌지만 가상돔 상에서는 모든 내용을 렌더링해서 바뀐 부분 적용함 (항목이 많아지면 느려질 가능성 있음, 컴포넌트 리렌더링 최적화 필요)
  });

  //   * useEffect 사용 예시
  /* useEffect(() => {
    loadPost(username, urlSlug);
  }, [username, urlSlug]);
 */

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
