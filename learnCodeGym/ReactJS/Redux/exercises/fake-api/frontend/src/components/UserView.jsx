import { useSelector, useDispatch } from "react-redux"
// import { useEffect } from 'react'

const UserView = () => {
  const users = useSelector(state => state.userReducer)
  console.log(users)

  const dispatch = useDispatch();

  const getUsers = () => { 
    dispatch({ type: "FETCH_USER_REQUESTED" })
  }

  const deleteUser = (userId) => { 
    dispatch({ type: "DELETE_USER_REQUESTED", payload: userId })
  }

  return (
    <div>
      <h1>USER LIST</h1>
      <button onClick={getUsers}>Get users</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}



export default UserView