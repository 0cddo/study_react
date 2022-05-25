import React, { useEffect } from 'react';

// React.memo로 최적화하기
const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;
  console.log('user list');

  /*   useEffect(() => {
    console.log(user);
  }, [user]); */

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
});

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

// * props are equal `React.memo(UserList, props are equal)`
// 전 후 props 비교 하여 boolean에 따라 리렌더링 방지 여부 컨트롤
// onRemove, onToggle 안바뀜 -> 리렌더링 방지
// propsAreEqual함수 사용시 주의 : props가 고정적이여서 비교할 필요가 없는지 꼭 확인 필요함
export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);

// * 컴포넌트 최적화
// - useMemo : 연산된 값 재사용
// - useCallback : 특정함수, (사용한다고 무조건 성능이 좋아지는 것은 아님)
// - React.memo: 컴포넌트 렌더링 결과물 재사용 (컴포넌트 최적화가 가능할 때 구현함 )
// 정말 컴포넌트 최적화가 필요한지 확인하고 사용한다
