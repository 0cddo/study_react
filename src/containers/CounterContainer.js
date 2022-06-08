// 리덕스 상태 조회, 액션 디스패치하는 컴포넌트
import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

// props를 통해 원하는 함수 받아옴
function CounterContainer({
  number,
  diff,
  /*onIncrease, onDecrease, onSetDiff*/
  increase,
  decrease,
  setDiff,
}) {
  return (
    <Counter
      number={number}
      diff={diff}
      /* onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff} */
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});
/* const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(increase()),
  onDecrease: () => dispatch(decrease()),
  onSetDiff: (diff) => dispatch(setDiff(diff)),
}); */

// bindActionCreators 사용
/* const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increase,
      decrease,
      setDiff,
    },
    dispatch,
  ); */

// bindActionCreator 사용 없이 바로 객체로 넣으면 깔끔
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
