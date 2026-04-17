import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ReadData(){
  const[userData, setUserData] = useState([]);
  const[loader, setLoader] = useState(false);
  const navigate = useNavigate();
  // const url = "https://dummyjson.com/users";
  const url = "http://localhost:3000/users";
  
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
    let responce = await fetch(url);
    responce = await responce.json()
    setUserData(responce)
    setLoader(false);
  }

  const deleteUser = async(id) => {
    let response = await fetch(url+"/"+id,{
      method : "DELETE"
    });
    response = await response.json();
    if(response){
      alert("record deleted");
      getUsersData();
    }
  }
  
  const editUser = (id) => {
    navigate("/edit/"+id)
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
              <li><button onClick={() => {editUser(users.id)}}>Edit</button></li>
              <li><button onClick={() => {deleteUser(users.id)}}>Delete</button></li>
            </ul>
          ))
          :<h1>Loading...</h1>
        }
        
    </>
  )
    
}