import { useState } from "react"

export default function AddData(){
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')

    const createUser = async () => {
        const url = "http://localhost:3000/users";
        let response =await fetch(url,{
            method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, age, email}),
        })
        response = await response.json()

        if (response) {
            alert("new user added");
            console.log(response);
        }
    }
    return (
        <>
            <h1>Add Data</h1>
            <form>
                <label htmlFor="name">name:</label><br/><input onChange={(e) => {setName(e.target.value)}} type="text" id="name" name="name"/><br/>
                <label htmlFor="age">age:</label><br/><input onChange={(e) => {setAge(e.target.value)}} type="text" id="age" name="age"/><br />
                <label htmlFor="email">email:</label><br/><input onChange={(e) => {setEmail(e.target.value)}} type="email" id="email" name="email"/><br />
                <button onClick={createUser}>submit</button>
            </form>
        </>
    )
}