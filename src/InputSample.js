import React, { useRef, useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  // useRef를 이용해 DOM 선택, 객체 생성
  // useRef는 DOM선택외에 렌더링과 관계없는 변수관리에도 사용됨
  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });

    // current는 DOM을 가리킴
    nameInput.current.focus();
  };

  return (
    <>
      {/* 선택하고 싶은 DOM에 ref 넣어줌, DOM에 직접 접근 가능  */}
      <input
        name="name"
        placeholder="name"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </>
  );
}

export default InputSample;
