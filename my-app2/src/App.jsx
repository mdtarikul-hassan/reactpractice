import AddData from "./api/AddData"
import EditUser from "./api/EditUser"
import ReadData from "./api/readData"
import {NavLink, Route, Routes} from 'react-router-dom'
import UseApi from "./UseApi"
import Header from "./Header"
import Product from "./Product"

import CartListing from "./CartListing"



function App() {
  
  return(
    <>
    {/* <nav> <NavLink to="/">Home</NavLink> | <NavLink to="/add">Add User</NavLink> </nav> */}
    <Header/>
      
  
    {/* <Product/> */}
      <Routes>
        <Route path="/" element={<ReadData />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/products" element={<Product/>} />
        <Route path="/cart" element={<CartListing/>} />
      </Routes>

      {/* complete redux with store, slice, data store in local storage, useDispatch for addToCrt and removeFromCart button, and many .... */}
    </>
  )
}

export default App
