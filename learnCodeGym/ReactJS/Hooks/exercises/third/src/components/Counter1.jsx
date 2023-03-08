
import {useIncrement} from "../hooks/useIncrement";

const incrementBy = 1;

export default function Counter1() {
    const [count, increase] = useIncrement(incrementBy);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => increase()}>Increase {incrementBy}</button>
        </div>
    );
}