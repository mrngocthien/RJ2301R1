
export default function Home({ user, onLogout }) {
  return (
    <div>
      <h1>Welcome {user.email}</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
