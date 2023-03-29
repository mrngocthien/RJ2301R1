import { ACTION_TYPES } from "../constants/actionTypes"
import shop from "../../api/shop"

const receiveProducts = products => ({
  type: ACTION_TYPES.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}
