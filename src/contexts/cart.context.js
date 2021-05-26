import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/products.reducer.js";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  // TODO: initialState of cart should come from backend.
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
