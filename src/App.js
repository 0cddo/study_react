import { useRef, useState, useMemo } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

// useMemo Hook
// input 상태 관리로 인해 컴포넌트가 리렌더링될 때마다 활성 사용자 수 카운팅함 -> 이럴 때 useMemo Hook 사용
// 특정 값이 바뀔 때만 특정 함수 사용해서 연산, 안바뀌면 재사용함
// - 이전에 연산된 값을 재사용할 때 사용
// - 성능 최적화 할 때 주로 사용
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'young eun',
      email: 'hello0@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'hyun joon',
      email: 'hellojoon@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'shim ddo',
      email: 'hello-ddo@gmail.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // useMemo Hook
  //  첫번째 파라미터 함수, 두번째 파라미터 deps
  // deps 배열의 값이 바뀌어야만 함수를 연산함, 최적화
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
