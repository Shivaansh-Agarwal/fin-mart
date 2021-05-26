export function cartReducer(prevCartState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return prevCartState;
    case "REMOVE_FROM_CART":
      return prevCartState;
    case "MOVE_TO_WISHLIST":
      return prevCartState;
    default:
      throw new Error("Something's wrong in Cart Reducer");
  }
}
