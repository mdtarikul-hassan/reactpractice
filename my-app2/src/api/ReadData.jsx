import { useEffect, useState } from "react";

export default function ReadData(){
  const[userData, setUserData] = useState([]);
  const[loader, setLoader] = useState();

  
  useEffect(() => {
    // const getUsersData = async()=>{
    //   const url = "https://dummyjson.com/users";
    //   let responce = await fetch(url);
    //   responce = await responce.json()
    //   setUserData(responce.users)
    // }
    
    getUsersData();
    setLoader(true);
    
  },[])
  const getUsersData = async()=>{
    const url = "https://dummyjson.com/users";
    let responce = await fetch(url);
    responce = await responce.json()
    setUserData(responce.users)
    setLoader(false);
  }

  


  return (
    <>
      <h1>fetch data from api</h1>
      
        {
          !loader?
          userData && userData.map((users) => (
            <ul>
              <li>{users.firstName} {users.lastName}</li>
              <li>{users.age}</li>
            </ul>
          ))
          :<h1>Loading...</h1>
        }
        
    </>
  )
    
}