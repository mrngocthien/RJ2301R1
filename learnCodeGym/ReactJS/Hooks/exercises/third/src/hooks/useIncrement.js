import { useState } from "react";

export default function useIncrement(addMount) {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count => count + addMount)
    }
    return [count, increase];
}