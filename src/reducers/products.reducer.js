import { cloneDeep } from "lodash";

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
    case "ADD_TO_CART":
      let cartList = cloneDeep(prevState.cartList);
      const isPresent =
        cartList.find((item) => item.id === action.payload) !== undefined;
      if (isPresent) {
        for (let i = 0; i < cartList.length; i++) {
          if (cartList[i].id === action.payload) {
            cartList[i].quantity += 1;
          }
        }
      } else {
        cartList = [...cartList, { id: action.payload, quantity: 1 }];
      }
      return {
        ...prevState,
        cartList: cartList,
      };
    default:
      throw new Error("Something's wrong in Products Reducer");
  }
}
