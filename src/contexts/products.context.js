import { useContext, useReducer, createContext } from "react";
import { productsReducer } from "../reducers/products.reducer.js";

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [productsState, productsDispatch] = useReducer(productsReducer, {
    productsList: [],
    wishList: [],
    cartList: [],
    showOutOfStock: false,
    search: "",
    sortBy: "",
  });

  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
