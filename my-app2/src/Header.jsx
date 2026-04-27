import { Link } from "react-router-dom"
import AddToCart from "./AddToCart"

const Header = () => {
    return (
        <header>
            <div className="logo">MyShop</div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </nav>
            <AddToCart/>
        </header>
    )
}

export default Header
