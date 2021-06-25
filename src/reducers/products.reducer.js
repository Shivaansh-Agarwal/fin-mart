import { cloneDeep } from "lodash";

export function productsReducer(prevState, action) {
  switch (action.type) {
    case "INITIALIZE_PRODUCT_LIST":
      return {
        ...prevState,
        wishList: [],
        cartList: [],
        showOutOfStock: false,
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
    case "ADD_TO_CART": {
      let cartList = cloneDeep(prevState.cartList);
      cartList = [...cartList, { id: action.payload, quantity: 1 }];
      return {
        ...prevState,
        cartList: cartList,
      };
    }
    case "REMOVE_FROM_CART": {
      let cartList = cloneDeep(prevState.cartList);
      cartList = cartList.filter((item) => item.id !== action.payload);
      return {
        ...prevState,
        cartList,
      };
    }
    case "INC_PRODUCT_QTY_CART": {
      let cartList = cloneDeep(prevState.cartList);
      cartList.forEach((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
        }
      });
      return {
        ...prevState,
        cartList,
      };
    }
    case "DEC_PRODUCT_QTY_CART": {
      let cartList = cloneDeep(prevState.cartList);
      cartList.forEach((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
        }
      });
      return {
        ...prevState,
        cartList,
      };
    }
    default:
      throw new Error("Something's wrong in Products Reducer");
  }
}
