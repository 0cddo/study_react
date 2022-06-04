import React, { Component } from 'react';

// * 클래스형 컴포넌트
// - 요즘은 잘안씀
// - 컴포넌트 선언 또 다른 방식
// - 클래스형 컴포넌트 유지보수 할 일 있음
// - 함수형에서 못쓰는 Hook도 있음
// - 사용할 일 없지만 만약을 위해서 배워요~
// - Hooks의 등장으로 뒷전이 되버림

class Hello extends Component {
  // default props 설정 방법
  static defaultProps = {
    name: '이름없음',
  };

  render() {
    const { color, isSpecial, name } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}
/* function Hello({ color, name, isSpecial }) {
  return (
    <div 
      style={{
        color,
      }}
    >
      <b>{isSpecial ? '삼항연산자인가요?' : '삼항연산자가 아닌가요?'}</b>
      {isSpecial && <b>&&</b>}
      안녕하세요 {name}
    </div>
  );
} */

/* Hello.defaultProps = {
  name: '이름없음',
}; */

export default Hello;
