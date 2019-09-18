export const loadStocks = response => ({
  type: "LOAD_STOCKS",
  payload: response
});

export const addSymbol = symbol => ({
  type: "ADD_SYMBOL",
  payload: symbol
});

export const removeSymbol = symbol => ({
  type: "REMOVE_SYMBOL",
  payload: symbol
});
