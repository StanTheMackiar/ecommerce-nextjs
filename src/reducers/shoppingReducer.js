import { productsList } from "../../pages/api/products";
import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: productsList,
  cart: [],
  totalAmount: 0,
  totalProducts: 0,
};

export function shoppingReducer(state, action) {
  const { payload } = action;

  switch (action.type) {
    case TYPES.OPEN_CART: {
      return {
        ...state,
        isOpen: true,
      }
    }
    case TYPES.CLOSE_CART: {

    }
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, amount: item.amount + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, amount: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === payload);

      return itemToDelete.amount > 1
        ? {
            ...state, 
            cart: state.cart.map((item) =>
              item.id === payload
                ? { ...item, amount: item.amount - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) =>
            item.id !== payload
          ),
          };
    }
    case TYPES.ADD_ONE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) =>
        item.id !== payload
      ),
      };
    }
    case TYPES.CLEAR_CART: return shoppingInitialState;

    case TYPES.TOTAL_AMOUNT: {
      return {
        ...state,
        totalAmount: state.cart.reduce((prev, current) => prev + (current.price * current.amount), 0)
      }
      
    }

    case TYPES.TOTAL_PRODUCTS: {
      return {
        ...state,
        totalProducts: state.cart.reduce((prev, current) => prev + current.amount, 0)
      }
    }
    
    default:
      return state;
  }
}
