import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  // onChange 이벤트 이용하기
  const onChange = (e) => {
    setText(e.target.value); // input 입력한 값
  };

  //   onClick 이벤트
  const onReset = () => {
    setText('');
  };
  return (
    <>
      {/* value={text} 설정해야 나중에 input 값 초기화됨 */}
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </>
  );
}

export default InputSample;
