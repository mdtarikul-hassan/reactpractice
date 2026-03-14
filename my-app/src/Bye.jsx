import style from "./Bye.module.css"

function Bye(){

 

    const name="Tarikul"
    const age = 21

    //  function getName(myname){
    //     return myname
    // }
    const getName = (myname) => {
        return myname
    }
    const handleInput = (event) => {
        console.clear()
        console.log("Value : ",event.target.value)
    }
    const handleMouseOver = () => {
        console.log("Mouse is over")
    }
    const handleDoubleClick = () => {
        console.log("Mouse is double click")
    }
    function handleClick(){
        alert("Button was clicked")
    }

    return (
        <>
            <h1>Hello {getName(name)}</h1>
            <h1>Hello {getName(age)}</h1>
            <h2 className={style.test}>This is bye module</h2>
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>alert("Hello from inline ")}>say Hello</button>
            <br />
            <input type="text" onChange={handleInput} placeholder="Type something..." />

        </>
    )
}
export default Bye