import { useSelector } from "react-redux"

const AddToCart = () => {
    const cartselector = useSelector((state) => state.cart.items);
    console.log(cartselector)
    return (
      
        <div className="cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartselector.length ? cartselector.length : 0}</span>
        </div>
       
    )
}

export default AddToCart
