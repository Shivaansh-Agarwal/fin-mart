import { useEffect, useContext, useReducer, createContext } from "react";
import { productsReducer } from "../reducers/products.reducer.js";
import axios from "axios";

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [productsState, productsDispatch] = useReducer(productsReducer, []);

  async function getProducts() {
    try {
      const { data } = await axios.get(
        "https://emart.shivaansh98.repl.co/api/v1/products"
      );
      productsDispatch({
        type: "SET_PRODUCTS_DEFAULT",
        payload: data.products,
      });
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  return useContext(ProductsContext);
}
