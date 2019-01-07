import { FETCH_PRODUCTS_LIST, ADD_PRODUCTS_TO_CART } from './types';

export const getProducts = () =>  {
 return {
     type: FETCH_PRODUCTS_LIST,
 };
};
export const addProductsToCarts = (data) =>  {
    return {
        type: ADD_PRODUCTS_TO_CART,
        payload:data,
    };
   };
   

