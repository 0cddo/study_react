import React, { useState } from 'react';

// todo item
function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration: todo.done ? 'line-througn' : 'none',
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

// todo list
function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    // submit 새로고침 방지
    e.preventDefault();
    // 새로운 데이터 등록 함수
    onCreate(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} placeholder="오늘의 할 일 " />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
