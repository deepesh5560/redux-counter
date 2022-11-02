const initialState = 0;

const changeNum = (state = initialState, action) => {
  switch (action.type) {
    case "Increament":
      return state + 1;
    case "Decreament":
      return state - 1;

    default:
      return state;
  }
};

export default changeNum;
