import React, { useState } from 'react';

function InputSample() {
  // useState에서 여러개의 객체로 문자열 관리
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    // react에서 객체 업데이트를 위해서는 이전 객체 복사 후, 특정 값을 덮어씌워야함
    // 불변성을 지켜줘야함 (컴포넌트 업데이트 성능 최적화)
    setInputs({
      ...inputs,
      // [name] 은 name 또는 nickname이 됨
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <>
      {/* input에 name값을 넣어 이벤트 발생 시 값 참조하게 함 */}
      <input name="name" placeholder="name" onChange={onChange} value={name} />
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
