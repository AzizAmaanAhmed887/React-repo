import {useEffect, useState} from "react";

export function Counter() {
    let [count, setCount] = useState(0);

    let increment = () => {
        setCount(currCount => currCount + 1);
    }

    useEffect(() => {
        console.log("Count has been updated to " + count);
    })

    return (
        <>
            <h3>Count = {count}</h3>
            <button onClick={increment}>+1</button>
        </>
    )
}