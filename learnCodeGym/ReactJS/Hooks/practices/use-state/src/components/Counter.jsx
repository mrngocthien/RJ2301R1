import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(5);

    const handleCounter = () => {
        setCount(count + 1)
    }
    return(
        <div>Giá trị {count}
            <div>
                <button onClick={handleCounter}>Increment</button>
            </div>
        </div>
    )
}