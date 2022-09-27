import React, { createContext, useEffect, useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";

const shoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart, totalAmount, totalProducts,} = state;

  console.log(cart);

  const openCart = () => {
    dispatch({ type: TYPES.OPEN_CART })
  }

  const closeCart = () => {
    dispatch({ type: TYPES.CLOSE_CART })
  }

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const addFromCart = (id) => {
    dispatch({ type: TYPES.ADD_ONE_FROM_CART, payload: id });
  };

  const delFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  const delAllFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const getTotalAmount = () => {
    dispatch({ type: TYPES.TOTAL_AMOUNT });
  };

  const getTotalProducts = () => {
    dispatch({ type: TYPES.TOTAL_PRODUCTS })
  }

  useEffect(() => {
    getTotalAmount();
    getTotalProducts();
  }, [cart]);

  const data = {
    products,
    cart,
    totalAmount,
    totalProducts,
    addFromCart,
    addToCart,
    delFromCart,
    delAllFromCart,
    clearCart,
    openCart,
    closeCart,
  };

  return (
    <shoppingContext.Provider value={data}>{children}</shoppingContext.Provider>
  );
};

export { ShoppingProvider };

export default shoppingContext;
