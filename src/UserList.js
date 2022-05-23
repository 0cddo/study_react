import React from 'react';

// 효율적인 방법의 배열 렌더링 (컴포넌트 새로 생성, 한 컴포넌트에 컴포넌트 여러개여도 됩니다~)
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'young eun',
      email: 'hello0@gmail.com',
    },
    {
      id: 2,
      username: 'hyun joon',
      email: 'hellojoon@gmail.com',
    },
    {
      id: 3,
      username: 'shim ddo',
      email: 'hello-ddo@gmail.com',
    },
  ];

  return (
    <>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </>
  );
}

export default UserList;
