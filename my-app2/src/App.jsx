import { lazy, Suspense, useState } from "react"
import AddData from "./api/AddData"
import EditUser from "./api/EditUser"
import ReadData from "./api/readData"
import {NavLink, Route, Routes} from 'react-router-dom'
import UseApi from "./UseApi"
import Header from "./Header"
import Product from "./Product"
import { useDispatch } from "react-redux"
import { clearAllItems } from "./redux/slice"
// import LazyLoadingData from "./LazyLoadingData"
const LazyLoadingData = lazy(() => import('./LazyLoadingData'))



const fetchData = () => fetch('http://localhost:3000/users').then((response) => response.json());
const userResource = fetchData();

function App() {
  const [load,setLoad] = useState(false);
  const dispatch = useDispatch()
  return(
    <>
    {/* <nav> <NavLink to="/">Home</NavLink> | <NavLink to="/add">Add User</NavLink> </nav> */}
    <Header/>
      <button className="add-to-cart" onClick={()=>dispatch(clearAllItems())}>clear Cart</button>
  
    <Product/>
      <Routes>
        <Route path="/" element={<ReadData />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>

      <button onClick={() => setLoad(true)}>LazyLoading</button>
      {/* { load ? <LazyLoadingData/> : null}  */}
      { load ? <Suspense fallback={<h3>lazy loading....</h3>} ><LazyLoadingData/></Suspense> : null }


      {/* use api */}
      <h1>Use Api in react</h1>
            <Suspense fallback={<h3>loading...</h3>}>
                <UseApi userResource={userResource}/>
            </Suspense>
            {/* that currently not working */}
    </>
  )
}

export default App
