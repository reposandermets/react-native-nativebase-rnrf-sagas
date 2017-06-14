import { Provider, connect } from 'react-redux';
import { Counter } from '../../components/counter';
import { createSelector, createStructuredSelector } from 'reselect';
import {
  increment, decrement, zero,
  multiplyBy, incrementAsync
} from './actions';

const selectCount = (state) => state.counter;
const makeSelectCount = () => createSelector(
  selectCount,
  (counter) => counter.count
);

const mapStateToProps = createStructuredSelector({
  count: makeSelectCount()
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  zero: () => dispatch(zero()),
  multiplyBy: x => dispatch(multiplyBy(x)),
  incrementAsync: () => dispatch(incrementAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
