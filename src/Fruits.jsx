import { useState } from "react"

function Fruits() {
    const [fruits, setFruits] = useState(["apple", "banana", "orange"])

    // adding fruit
    const addFruit = () => {
        setFruits([...fruits, "grape"])
    }

    // removing fruit
    const removeFruit = () => {
        setFruits(fruits.filter(fruit => fruit !== "banana"))
    }

    // update fruit
    const updateFruit = () => {
        setFruits(
            fruits.map(fruit =>
                fruit === "Apple" ? "Green Apple" : fruit
            )
        )
    }

    return (
        <div>
            <h2>Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <button onClick={addFruit}>Add Fruit</button>
            <button onClick={removeFruit}>Remove Banana</button>
            <button onClick={updateFruit}>Update Apple to Green Apple</button>
        </div>
    )
}

export default Fruits;