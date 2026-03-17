import { useEffect, useState } from "react";

function Users() {
    const [user, setUser] = useState([])


    useEffect(() => {
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUser(json))
        
        
    })

    return (
        <>
            <h2>Users : </h2>
            {user.map((u) => (
                <li key={u.id}>{u.id} - {u.name}</li>
            ))}
            
        </>
    )
}

export default Users