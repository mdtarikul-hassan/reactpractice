import { useEffect, useState } from "react";

export default function ReadData(){
  const[userData, setUserData] = useState([]);

  // const getUsersData = async()=>{
  //   const url = "https://dummyjson.com/users";
  //   let responce = await fetch(url);
  //   responce = await responce.json()
  //   setUserData(responce.users)
  // }

  useEffect(() => {
    const getUsersData = async()=>{
      const url = "https://dummyjson.com/users";
      let responce = await fetch(url);
      responce = await responce.json()
      setUserData(responce.users)
    }
    getUsersData();
  },[])

  


  return (
    <>
      <h1>fetch data from api</h1>
      
        {userData && userData.map((users) => (
          <ul>
            <li>{users.firstName} {users.lastName}</li>
            <li>{users.age}</li>
          </ul>
        ))
        }
        
    </>
  )
    
}