import {Type} from './actionType'

export const initialState = {
    basket:[]
}



export const reducer =(state,action) =>{
    switch (action.type) {
      case Type.ADD_TO_BASKET:
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case Type.REMOVE_FROM_BASKET:
        const index = state.basket.findIndex(item => item.id === action.id);
      if (index >= 0) {
        const newBasket = [...state.basket];
        newBasket.splice(index, 1);
        return {
          ...state,
          basket: newBasket
        };
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in basket!`);
        return state;
      }
      default:
        return state;
    }
}