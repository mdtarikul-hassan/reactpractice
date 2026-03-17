import { useState } from "react";

function Student(){

    const [student, setStudent] = useState({
        name : "john",
        grade : "A",
        city : "kolkata"
    })
    const chageCity = () => {
        setStudent({...student, city: "kol"})
    }

    return (
        <>
        <h2>Name : {student.name}</h2>
        <p>Grade : {student.grade}</p>
        <p>City : {student.city}</p>
            <button onClick={chageCity}>Change Age</button>
            
        </>
    )

}
export default Student