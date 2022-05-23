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
      {users.map((user) => (
        //   key : 각 원소들마다 고유값을 주어 리렌더링 성능 최적화
        // key로 사용할 id가 없을 경우 map 콜백 함수의 두번재 파라미터 index 이용 (경고만 사라질뿐 성능적으로 좋아지는 것은 아님 )
        // users.map((user, index) => <User key={index}/>)
        <User user={user} key={user.id} />
      ))}
    </>
  );
}

export default UserList;
