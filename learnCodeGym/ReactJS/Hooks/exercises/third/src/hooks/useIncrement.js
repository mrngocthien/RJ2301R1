import { useState } from "react";

function useIncrement(addMount) {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count => count + addMount)
    }
    return [count, increase]; // return 1 mang thi phia ben component sd phai khai bao
    // 1 mang tuong ung 
}

export {useIncrement}