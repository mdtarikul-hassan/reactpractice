import { useEffect, useLayoutEffect } from "react"

function Testforuselayouteffect(){

    useEffect(() => {
        console.log("effect")
    }, [])
    useLayoutEffect(() => {
        console.log("layouteffect")
    }, [])

    return (
        <>
            <h2>Test</h2>
        

        </>
    )
}
export default Testforuselayouteffect