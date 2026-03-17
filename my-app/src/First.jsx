import { useEffect, useState } from "react";

function First() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")


    useEffect(() => {
        document.title = `Count : ${count}`
        console.log("useeffect hit")
    },[count, name])

    return (
        <>
            <h2>Count : {count}</h2>
            <h2>name : {name}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setName("empty")}>Increment</button>
            
        </>
    )
}

export default First