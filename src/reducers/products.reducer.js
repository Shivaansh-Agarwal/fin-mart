export function productsReducer(prevProductsState, action) {
  switch (action.type) {
    case "SET_PRODUCTS_DEFAULT":
      return [...action.payload];
    case "SORT_NAME_A_Z":
      return prevProductsState;
    case "SORT_NAME_Z_A":
      return prevProductsState;
    case "SORT_PRICE_LOW_TO_HIGH":
      return prevProductsState;
    case "SORT_PRICE_HIGH_TO_LOW":
      return prevProductsState;
    default:
      throw new Error("Something's wrong in Products Reducer");
  }
}
