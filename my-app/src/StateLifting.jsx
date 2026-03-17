import {useState} from "react"
function Parent(){
    const [text, setText] = useState("")

    return (
        <div>
            <InputBox onChange={setText} />
            <Display value={text}/>
        </div>
    )
}
function InputBox({onChange}){
    return <input type="text" onChange={(e) => onChange(e.target.value)} />
}
function Display({value}){
    return <h3>State Lifting :    Typed ... = {value}</h3>
}
function StateLifting(){
    return <Parent/>
}
export default StateLifting