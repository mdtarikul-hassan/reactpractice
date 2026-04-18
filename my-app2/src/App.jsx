import { lazy, Suspense, useState } from "react"
import AddData from "./api/AddData"
import EditUser from "./api/EditUser"
import ReadData from "./api/readData"
import {NavLink, Route, Routes} from 'react-router-dom'
// import LazyLoadingData from "./LazyLoadingData"
const LazyLoadingData = lazy(() => import('./LazyLoadingData'))


function App() {
  const [load,setLoad] = useState(false);

  return(
    <>
    <nav> <NavLink to="/">Home</NavLink> | <NavLink to="/add">Add User</NavLink> </nav>
      <Routes>
        <Route path="/" element={<ReadData />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>

      <button onClick={() => setLoad(true)}>LazyLoading</button>
      {/* { load ? <LazyLoadingData/> : null}  */}
      { load ? <Suspense fallback={<h3>lazy loading....</h3>} ><LazyLoadingData/></Suspense> : null }
    </>
  )
}

export default App
