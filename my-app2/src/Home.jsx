import { lazy, Suspense, useState } from "react"
// import LazyLoadingData from "./LazyLoadingData"
const LazyLoadingData = lazy(() => import('./LazyLoadingData'))

export default function Home(){

    const fetchData = () => fetch('http://localhost:3000/users').then((response) => response.json());
    const userResource = fetchData();

    const [load,setLoad] = useState(false);
    return(
        <>
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