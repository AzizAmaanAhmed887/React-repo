import { useState } from 'react'

export default function User() {
    const [user, setUser] = useState({
        name: 'Amaan',
        age: 22,
        residence: 'jabalpur'
    })

    function incAge(){
        setUser({
            ...user,
            age: user.age + 1
        })
    }

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Residence: {user.residence}</p>
            <button onClick={incAge}>Increase Age</button>
        </div>
    )
}