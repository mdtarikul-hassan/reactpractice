import { useState } from "react";

function UserProfile(){

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(18)


    return (
        <>
        <h2>Name : {name}</h2>
        <h3>Age : {age}</h3>
            <button onClick={() => setName("Md tarikul")}>Change Name</button>
            <button onClick={() => setAge(age + 2)}>Change Age</button>
            
        </>
    )

}
export default UserProfile