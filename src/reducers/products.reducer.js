export function productsReducer(prevState, action) {
  switch (action.type) {
    case "INITIALIZE_PRODUCT_LIST":
      return {
        ...prevState,
        productsList: action.payload,
      };
    case "INITIALIZE_CAMPAIGNS":
      return {
        ...prevState,
        campaigns: action.payload,
      };
    case "SORT_NAME_A_Z":
      return prevState;
    case "SORT_NAME_Z_A":
      return prevState;
    case "SORT_PRICE_LOW_TO_HIGH":
      return prevState;
    case "SORT_PRICE_HIGH_TO_LOW":
      return prevState;
    default:
      throw new Error("Something's wrong in Products Reducer");
  }
}
