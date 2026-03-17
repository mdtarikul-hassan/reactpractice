import { useEffect, useEffectEvent, useState } from "react";

function Timer() {
    const [second, setSecond] = useState(0)
    const [count, setCount] = useState(0)

    const onTick = useEffectEvent(() => {
        console.log("count : "+ count)
        setCount(c => c+1)

    })

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(second + 1)
            onTick()
        }, 1000)

        return () => {
            clearInterval(interval)
            console.log("interval clear")
        }
        
    })

    return (
        <>
            <h2>Timer : {second}</h2>
            
        </>
    )
}

export default Timer