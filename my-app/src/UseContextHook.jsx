import { createContext, useContext } from 'react'

const UserContext = createContext

function UseContextHook(){
    const user = {name:"tarik", age:"20"};
    return (
        
        <UserContext.Provider value={user}>
            <Parent/>
        </UserContext.Provider>
        
    )

}
function Parent(){
    return <Child/>
}
function Child(){
    const user = useContext(UserContext);
    return (
        <div>
            <h2 style={{color : "blue"}}>Name : {user}</h2>
            <GrandChild/>
        </div>
    )
}
function GrandChild(){
    const {user,age} = useContext(UserContext);
    return <h3>my name is = {user} and is : {age} </h3>
}

export default UseContextHook