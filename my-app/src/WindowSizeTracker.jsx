import { useEffect, useState } from "react";

function WindowSizeTracker() {
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {
        
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("window is resized !")
        }
        
    })

    return (
        <>
            <h2>window width : {width}</h2>
            
        </>
    )
}

export default WindowSizeTracker