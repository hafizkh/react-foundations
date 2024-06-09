import React, { useState } from "react"

const User = ({ name }) => {
    const [count, setCount] = useState(0)
    return <div className="user-card">
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>Count = {count}</h1>
        <button onClick={() => setCount(count - 1)}>-</button>
        <h2>Name: {name}</h2>
        <h3>Location: Hameenlinna</h3>
        <h4>Contact: 12345678</h4>
    </div>
}

export default User