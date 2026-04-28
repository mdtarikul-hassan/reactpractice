import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "./redux/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function CartListing(){
    const cartselector = useSelector((state) => state.cart.items);
    console.log(cartselector)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const [cartItems, setCartItems] = useState(cartselector)
    // const manageQuantity = (id, qty) => {
    //     let quantity = parseInt(qty)>1 ? parseInt(qty):1
    //     const crtTempItems = cartselector.map((item) => {
    //         return item.id == id?{...item.quantity}:item
    //     })
    //     setCartItems(cartTempItems)
    // }

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cartselector);
    }, [cartselector]);

    const handleIncrease = (id) => {
        const updated = cartItems.map((item) =>
            item.id === id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
        );
        setCartItems(updated);
    };

    const handleDecrease = (id) => {
        const updated = cartItems.map((item) =>
            item.id === id
                ? {
                      ...item,
                      quantity:
                          item.quantity && item.quantity > 1
                              ? item.quantity - 1
                              : 1,
                  }
                : item
        );
        setCartItems(updated);
    };

    const onHandleChange= ()=> {
        localStorage.clear();
        dispatch(clearAllItems());
        alert("Your Order is Placed...");
        navigate("/products");
    }
    return (
        <>
            <div class="cart-container">
                <h2>Your Cart</h2>
                {
                    cartItems.length>0 && cartItems.map((item) => (
                        <div key={item.id} class="cart-item">
                            <div className="item-left">
                                <img src={item.thumbnail} alt="Product"/>
                                <div className="item-info">
                                    <span>{item.title}</span>
                                    <span className="price">₹
                                        {
                                        // item.quantity?item.price*item.quantity : item.price
                                        ((item.quantity || 1) * item.price).toFixed(2)
                                        }
                                        </span>
                                    <div className="quantity-box">
                                        <button onClick={() => handleDecrease(item.id)} className="qty-btn minus">-</button>
                                        <span className="qty-value">{item.quantity || 1}</span>
                                        <button onClick={() => handleIncrease(item.id)} className="qty-btn plus">+</button>
                                    </div>
                                </div>
                                
                            </div>
                            <button className="remove-btn" onClick={()=>dispatch(removeItem(item))}>Remove from cart</button>
                            
                        </div>
                    ))
                }

                <div className="total-section">
                    <h3>Total: ₹{cartItems.reduce((sum,item) =>
                        // item.quantity? sum+item.price*item.quantity : sum+item.price
                        sum+(item.quantity || 1)* item.price
                        ,0).toFixed(2)}</h3>
                    <button onClick={() => onHandleChange()} className="checkout-btn">Place order</button>
                </div>
            </div>
        </>

    )
}