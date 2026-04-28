import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./redux/slice";

export default function CartListing(){
    const cartselector = useSelector((state) => state.cart.items);
    console.log(cartselector)
    const dispatch = useDispatch()
    return (
        <>
            <div class="cart-container">
                <h2>Your Cart</h2>
                {
                    cartselector.length && cartselector.map((item) => (
                        <div key={item.id} class="cart-item">
                            <div className="item-left">
                                <img src={item.thumbnail} alt="Product"/>
                                <div className="item-info">
                                    <span>{item.title}</span>
                                    <span className="price">₹{item.price}</span>
                                </div>
                            </div>
                            <button className="remove-btn" onClick={()=>dispatch(removeItem(item))}>Remove from cart</button>
                            
                        </div>
                    ))
                }

                <div class="total-section">
                    <h3>Total: ₹{cartselector.reduce((sum,item) => sum+item.price,0).toFixed(2)}</h3>
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
    
        </>

    )
}