import {useEffect, useState} from "react";

export function Counter() {
    let [countX, setCountX] = useState(0);
    let [countY, setCountY] = useState(0);

    let incrementX = () => {
        setCountX(currCount => currCount + 1);
    }
    let incrementY = () => {
        setCountY(currCount => currCount + 1);
    }

    useEffect(() => {
        console.log("This is side-effect");
    }, [countY]);
    return (
        <>
            <h3>Count = {countX}</h3>
            <button onClick={incrementX}>+1</button>

            <h3>Count = {countY}</h3>
            <button onClick={incrementY}>+1</button>
        </>
    )
}