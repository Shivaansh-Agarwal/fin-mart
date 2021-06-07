import { useContext, useReducer, createContext } from "react";
import { productsReducer } from "../reducers/products.reducer.js";

const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  const [productsState, productsDispatch] = useReducer(productsReducer, {
    productsList: [],
    campaigns: [],
    wishList: [],
    cartList: [],
    showOutOfStock: false,
    search: null,
    sortBy: null,
    filterBy: null,
  });

  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProductsContext() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error(
      "useProductsContext must be used within a ProductsContextProvider"
    );
  }
  return context;
}

export { ProductsContextProvider, useProductsContext };
