import React from 'react';

function UserList() {
  // 비효율적인 방법 배열 렌더링
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
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[0].email})</span>
      </div>
    </>
  );
}

export default UserList;
