export function productsReducer(prevState, action) {
  switch (action.type) {
    case "INITIALIZE_PRODUCT_LIST":
      return {
        ...prevState,
        search: null,
        sortBy: null,
        productsList: action.payload,
      };
    case "INITIALIZE_CAMPAIGNS":
      return {
        ...prevState,
        campaigns: action.payload,
      };
    case "SORT_RELEVANCE":
      return {
        ...prevState,
        sortBy: null,
      };
    case "SORT_NAME_A_Z":
      return {
        ...prevState,
        sortBy: "SORT_NAME_A_Z",
      };
    case "SORT_NAME_Z_A":
      return {
        ...prevState,
        sortBy: "SORT_NAME_Z_A",
      };
    case "SORT_PRICE_LOW_TO_HIGH":
      return {
        ...prevState,
        sortBy: "SORT_PRICE_LOW_TO_HIGH",
      };
    case "SORT_PRICE_HIGH_TO_LOW":
      return {
        ...prevState,
        sortBy: "SORT_PRICE_HIGH_TO_LOW",
      };
    default:
      throw new Error("Something's wrong in Products Reducer");
  }
}
