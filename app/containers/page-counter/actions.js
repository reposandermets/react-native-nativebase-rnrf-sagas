
export const increment = () => {
  const action = {
    type: 'INCREMENT'
  };
  return action;
};

export const decrement = () => {
  const action = {
    type: 'DECREMENT'
  };
  return action;
};

export const zero = () => {
  const action = {
    type: 'ZERO'
  };
  return action;
};

export const multiplyBy = (multiplier) => {
  const action = {
    type: 'MULTIPLY',
    payload: Number(multiplier)
  };
  return action;
};

export const incrementAsync = () => {
  const action = {
    type: 'INCREMENT_ASYNC'
  };
  return action;
};

