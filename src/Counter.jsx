import { useEffect, useState } from "react";

export function Counter() {
    const [countX, setCountX] = useState(0);
    const [countY, setCountY] = useState(0);

    const incrementX = () => {
        setCountX((currCount) => currCount + 1);
    };

    const incrementY = () => {
        setCountY((currCount) => currCount + 1);
    };

    useEffect(() => {
        console.log("Count Y changed:", countY);
    }, [countY]);

    return (
        <div>
            <h1>Counter Component</h1>
            <div>
                <h3>Count X = {countX}</h3>
                <button onClick={incrementX}>Increment X</button>
            </div>
            <div>
                <h3>Count Y = {countY}</h3>
                <button onClick={incrementY}>Increment Y</button>
            </div>
        </div>
    );
}