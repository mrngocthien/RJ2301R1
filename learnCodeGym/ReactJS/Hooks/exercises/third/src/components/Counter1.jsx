
import useIncrement from "../hooks/useIncrement";

export default function Counter1() {
    const [count, increase] = useIncrement(1);

    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={() => increase()}>Increase 1</button>
        </div>
    );
}