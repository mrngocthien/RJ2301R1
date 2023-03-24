import { ACTION_TYPES } from "../constants/actionTypes"
import products from './products'

export const receiveProducts = (data) => {
    return {
        type: ACTION_TYPES.RECEIVE_PRODUCTS,
        payload: data
    }
} 
