const symbols = (state = ["AAPL", "MSFT", "TSLA"], action) => {
  let tempState;
  switch (action.type) {
    case "ADD_SYMBOL":
      tempState = [...state];
      tempState.push(action.payload);
      return tempState;
    case "REMOVE_SYMBOL":
      tempState = state.filter(symbol => symbol != action.payload);
      return tempState;
    default:
      return state;
  }
};

export default symbols;
