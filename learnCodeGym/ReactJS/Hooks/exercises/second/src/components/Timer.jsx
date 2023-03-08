import { useEffect, useState } from "react";

export default function Timer() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
        }, 1000);

        if (timer === 0) {
            clearInterval(intervalId);
            alert("Time's up!");
        }

        return () => clearInterval(intervalId);
    }, [timer]);

    return (
        <div>
            <h1>Timer: {timer}</h1>
        </div>
    );
}
