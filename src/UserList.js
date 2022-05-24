import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  // useEffect Hook 사용하기
  // 컴포넌트 렌더링 되기 전후(컴포넌트 마운트, 언마운트)에 특정 작업 가능, 컴포넌트 props 업데이트 전후에도 작업 가능
  //   두번째 파라미터에는 deps 들어감(의존되는 값들을 배열에 넣음), [] 빈 배열일 경우 컴포넌트가 처음 화면에 나타날 때만 실행됨
  //   UI가 화면에 나타난 상태 이후
  useEffect(() => {
    // *컴포넌트 마운트 시 추가하는 작업*
    // - props로 받은 값을 컴포넌트의 state로 설정
    // - REST API 요청 시
    // - 라이브러리 사용 시 (D3, Video.js)
    // - setInterval, setTimeout
    console.log('컴포넌트가 화면에 나타남');
    // *컴포넌트 언마운트 시 추가하는 작업*
    // - clearInterval, clearTimeout
    // - 라이브러리 인스턴스 제거
    return () => {
      // 컴포넌트가 사라질 때는 클리어 함수(일종의 뒷정리 함수) return 함
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

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
