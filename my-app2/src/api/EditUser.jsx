import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function EditUser(){
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();
    const url = "http://localhost:3000/users/"+id;

    useEffect(() => {
        getUserData()
    },[])

    const getUserData = async () => {
        let response = await fetch(url);
        response = await response.json();

        console.log(response.id);
        setName(response.name || "");
        setAge(response.age || "");
        setEmail(response.email || "");
    }

    const updateUser = async(e) => {
        e.preventDefault();
        let response = await fetch(url,{
            method : "PUT",
            body: JSON.stringify({name, age, email}),
        });
        response =await response.json();

        if(response){
            alert("user data updated");
            navigate('/')
        }
    }

    return(
        <>
            <h1>Edit Data</h1>
            <form>
                <label htmlFor="name">name:</label><br/><input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name"/><br/>
                <label htmlFor="age">age:</label><br/><input value={age} onChange={(e) => setAge(e.target.value)} type="text" id="age" name="age"/><br />
                <label htmlFor="email">email:</label><br/><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"/><br />
                <button onClick={updateUser}>Update</button>
            </form>
        
            
        </>
    )
}