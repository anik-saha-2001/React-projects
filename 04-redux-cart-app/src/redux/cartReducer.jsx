/* eslint-disable no-case-declarations */
const initialState = {
  cart: [],
};

export const getTotal = (cart) => {
  return cart.reduce((amount, item) => parseInt(item.price) + amount, 0);
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("Cannot Delete");
      }
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
}
