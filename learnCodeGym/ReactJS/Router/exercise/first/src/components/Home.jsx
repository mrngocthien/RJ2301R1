
export default function Home({ user, onLogout }) {
  return (
    <div className="container">
      <h1>Welcome {user.email}</h1>
      <div className="btn">
        <button onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}
