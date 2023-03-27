import { ACTION_TYPES } from "../constants/actionTypes"

const initialState = {
  users: [],
  userlogined: {}
}

const userReducer = (state = initialState, action) => {
  if (action.type === ACTION_TYPES.LOGIN_SUCCESS) {
    return {
      ...state,
      userlogined: action.payload
    }
  }

  if (action.type === ACTION_TYPES.FETCH_USER_SUCCESS) {
    return {
      ...state,
      users: action.payload
    }
  }

  if (action.type === ACTION_TYPES.LOGOUT) {
    return {
      ...state,
      users: action.payload
    }
  }

  return state
}

export default userReducer