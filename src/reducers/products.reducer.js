export function productsReducer(prevState, action) {
  switch (action.type) {
    case "INITIALIZE_PRODUCT_LIST":
      return {
        ...prevState,
        search: null,
        sortBy: null,
        filterBy: [],
        productsList: action.payload,
      };
    case "INITIALIZE_CAMPAIGNS":
      return {
        ...prevState,
        campaigns: action.payload,
      };
    case "SORT_PRODUCTS":
      return {
        ...prevState,
        sortBy: action.payload,
      };
    case "FILTER_PRODUCTS":
      let filterByList = [...prevState.filterBy];
      if (filterByList.includes(action.payload)) {
        filterByList = filterByList.filter(
          (filterCategory) => filterCategory !== action.payload
        );
      } else {
        filterByList.push(action.payload);
      }
      return {
        ...prevState,
        filterBy: filterByList,
      };
    default:
      throw new Error("Something's wrong in Products Reducer");
  }
}
