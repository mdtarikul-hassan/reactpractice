import { useState } from "react";

function SimpleForm(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const buttonClicked = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
    }

    return (
        <>
            <form onSubmit={buttonClicked}>
                <label >Name:</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                        <br />
                <label >Email:</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                        <br />
                <button type="submit">Submit</button>
            </form> 
        </>
    )
}
export default SimpleForm