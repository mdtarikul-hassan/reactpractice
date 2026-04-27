import AddToCart from "./AddToCart"

const Header = () => {
    return (
        <header>
            <div className="logo">MyShop</div>

            <nav>
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Contact</a>
            </nav>
            <AddToCart/>
        </header>
    )
}

export default Header
