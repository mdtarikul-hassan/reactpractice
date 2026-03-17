function Parent(){
    const username = "Tarikul";
    return <Child name={username}/>
}
function Child({name}){
    return <GrandChild name={name}/>

}
function GrandChild({name}){
    return <h3>props drillig : my name = {name}</h3>
}
function PropDrilling(){
    return <Parent/>
}
export default PropDrilling