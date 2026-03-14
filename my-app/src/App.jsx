
import './App.css'

import Hello from "./Hello"
import Bye from "./Bye"
import Button from "./Button"
import Counter from "./Counter"
import ToggleText from "./ToggleText"
import LikeButton from "./LikeButton"
import UserProfile from "./UserProfile"
import Student from "./Student"
import InputExample from "./InputExample"
import SimpleForm from "./SimpleForm"
import First from "./First"
import Timer from "./Timer"
import WindowSizeTracker from "./WindowSizeTracker"
import Users from "./Users"
import { BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Phone from "./Phone"
import Laptop from "./Laptop"




function App() {

  const isLoggedin = false
  let message;
  if(isLoggedin){
    message = <Hello/>
  }else{
    message = <Bye/>
  }

  function Messege(){
    alert("Hello from meaaege box")
  }
  function User(){
    console.log(useParams())
    const {id} = useParams()
    return <h2>User id : {id}</h2>
  }
  function NotFound(){
    
    return <h2>404 - not found</h2>
  }

  return (
    <>
      <BrowserRouter>
        {/* <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a> */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/user/10">User</Link> | 
          <Link to="/products">Products</Link>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/products" element={<Products />} >
            <Route path="phone" element={<Phone />} />
            <Route path="laptop" element={<Laptop />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <hr />
      <hr />
      <h1 className="test">App Component</h1>
      <Hello name="Md Tarikul" age={25} city = "kolkata"/>
      
      <Bye/>
      <h2 style={{color:"green",
        textAlign:"center",
        backgroundColor: "red",
        fontSize: 30}}>new component</h2>
      {message}
        <br />
      <Button lable="Click me" handleClick={Messege}/>
      <br />
      <Button lable="Just Click" handleClick={Messege}/>

      <br /><br /><br />
      <Counter/>
      
      <br /><br /><br />
      <ToggleText/>

      <br /><br /><br />
      <LikeButton/>

      <br /><br /><br />
      <UserProfile/>
         <br /><br /><br />
      <Student/>
         <br /><br /><br />
      <InputExample/>
      <hr /><hr />
      <SimpleForm/>
        <br /><br /><br /><br />
      <First/>
        <br /><br /><br />
      <Timer/>
      <br /><br /><br />
      <WindowSizeTracker/>
      <br /><br /><br />
      <Users/>


    </>
  )
}

export default App
