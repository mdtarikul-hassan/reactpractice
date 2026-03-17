import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate = useNavigate()
    const goToAbout = () => {
        navigate("/about")
    }
    return (<>
        <h2>This Home Page</h2>
        <button onClick={goToAbout}>gotoabout</button>
    </>)
}