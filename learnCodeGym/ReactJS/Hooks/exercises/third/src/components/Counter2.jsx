import useIncrement from "../hooks/useIncrement";

export default function Counter2() {
    const [count, increase] = useIncrement(2);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => increase()}>Increase 2</button>
    </div>
  );
}