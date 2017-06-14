
const initialState = {
  count: 0
};

export default countReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'MULTIPLY':
      return {
        count: state.count * action.payload
      };
    case 'ZERO':
      return {
        count: 0
      };
    default:
      return state;
  }

};
