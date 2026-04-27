import { useDispatch, useSelector } from "react-redux"
import AddToCart from "./AddToCart"
import { addItem } from "./redux/slice"
import { useEffect } from "react"
import { fetchProducts } from "./redux/ProductSlice"

const Product = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    const productselector = useSelector((state)=>state.products.items)
    console.log(productselector);

    const cartselector = useSelector((state) => state.cart.items);
    console.log(cartselector)
    return (
        <section className="product-container">
        {
            productselector.length && productselector.map((item)=>(
                <div key={item.id} className="product-card">
                    <img src={item.thumbnail} alt="Product"/>
                    <div className="product-title">{item.title}</div>
                    <div className="product-price">${item.price}</div>
                    {cartselector.find(cartItem => cartItem.id === item.id)?
                        <button className="added-to-cart" >Added to Cart</button>
                        : <button className="add-to-cart" onClick={()=>dispatch(addItem(item))}>Add to Cart</button>
                    
                    }
                    {/* <div className="btn-group">
                        <button className="add-to-cart" onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
                        <button className="remove-to-cart" onClick={()=>dispatch(removeItem(1))}>Remove from Cart</button>
                    </div> */}

                </div>
            ))
        }
        
        </section>
       
    )
}

export default Product


