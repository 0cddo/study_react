import { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

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

  // 컴포넌트의 상태로 관리
  const [users, setUsers] = useState([
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
  ]);

  // 배열의 불변성 지키면서 배열에 새로운 항목 추구하기 (spread 연산자 사용하기 )
  // push 사용하면 안됨
  const nextId = useRef(4);

  const onCreate = () => {
    // 새로운 user 객체 만들기
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);  // spread 연산자 사용
    setUsers(users.concat(user)); // concat 함수 사용
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
