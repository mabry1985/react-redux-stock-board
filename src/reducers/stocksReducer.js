const stocks = (state = { loaded: false }, action) => {
  switch (action.type) {
    case "LOAD_STOCKS":
      return { loaded: true, stocks: action.payload };
    default:
      return state;
  }
};

export default stocks;
