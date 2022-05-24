import { useRef } from 'react';
import UserList from './UserList';

function App() {
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

  // 변수 값을 기억하고 싶을 때 사용
  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); // 4
    nextId.current += 1; // 값이 바뀐다고 해서 컴포넌트 리렌더링 되지 않음
  };

  return <UserList users={users} />;
}

export default App;

// useRef 사용
// - 컴포넌트가 리렌더링 될 때마다 특정 값을 관리 할 때 사용함
// - setTimeout, setInterval의 id
// - 외부라이브러리를 사용하여 생성된 인스턴스
// - scroll 위치알아야할 때 등..
// - useRef로 관리하는 값은 바뀌어도 컴포넌트 리렌더링안됨
