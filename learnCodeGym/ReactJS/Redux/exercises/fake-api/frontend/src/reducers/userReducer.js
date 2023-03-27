const initialState = {
  users: []
}

const userReducer = (state = initialState, action) => {
  if (action.type === 'FETCH_USER_SUCCESS') {
    return {
      ...state,
      users: action.payload
    }
  }

  if (action.type === 'DELETE_USER_REQUESTED') {
    const filteredUsers = state.users.filter(user => user.id !== action.payload);
    return { ...state, users: filteredUsers };
  }

  return state
}

export default userReducer