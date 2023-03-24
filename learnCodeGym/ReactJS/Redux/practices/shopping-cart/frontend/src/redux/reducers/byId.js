
import { ACTION_TYPES } from "../constants/actionTypes"

const initialState = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "T-Shirt White", "price": 10.99, "inventory": 10},
  {"id": 3, "title": "iphone 12 pro", "price": 700, "inventory": 5}
]
const byId = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.payload.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      return state
  }
}