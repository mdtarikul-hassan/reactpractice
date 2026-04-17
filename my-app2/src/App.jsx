import AddData from "./api/AddData"
import EditUser from "./api/EditUser"
import ReadData from "./api/readData"
import {NavLink, Route, Routes} from 'react-router-dom'


function App() {
  

  return(
    <>
    <nav> <NavLink to="/">Home</NavLink> | <NavLink to="/add">Add User</NavLink> </nav>
      <Routes>
        <Route path="/" element={<ReadData />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App
