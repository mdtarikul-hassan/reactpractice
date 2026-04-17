import { useEffect, useState } from "react";

export default function ReadData(){
  const[userData, setUserData] = useState([]);
  const[loader, setLoader] = useState(false);

  
  useEffect(() => {
    // const getUsersData = async()=>{
    //   const url = "https://dummyjson.com/users";
    //   let responce = await fetch(url);
    //   responce = await responce.json()
    //   setUserData(responce.users)
    // }

    setLoader(true);
    getUsersData();
    
  },[])

  const getUsersData = async()=>{
    // const url = "https://dummyjson.com/users";
    const url = "http://localhost:3000/users";
    let responce = await fetch(url);
    responce = await responce.json()
    setUserData(responce)
    setLoader(false);
  }

  


  return (
    <>
      <h1>fetch data from api</h1>
      
        {
          !loader?
          userData && userData.map((users) => (
            <ul key={users.id}>
              <li>{users.name}</li>
              <li>{users.age}</li>
              <li>{users.email}</li>
            </ul>
          ))
          :<h1>Loading...</h1>
        }
        
    </>
  )
    
}