import { useSelector, useDispatch } from "react-redux"
import { ACTION_TYPES } from "../constants/actionTypes";
import { useNavigate } from 'react-router-dom';


const UserView = () => {
  const users = useSelector(state => state.userReducer);
  console.log(users)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: ACTION_TYPES.LOGOUT, payload: [] })
    navigate("/");
  };
  return (
    <div>
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
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserView