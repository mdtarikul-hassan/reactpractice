import { useDispatch } from "react-redux"
import AddToCart from "./AddToCart"
import { addItem } from "./redux/slice"

const Product = () => {
    const dispatch = useDispatch()
    return (
      
        <section className="product-container">
        <div className="product-card">
            <img src="https://imgs.search.brave.com/21XVfb64ujzNCzX2C2GzlITiR7Occ-YfgVy-CJESq3w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFJRGxucGFINkwu/anBn" alt="Product"/>
            <div className="product-title">Cool Sneakers</div>
            <div className="product-price">$49.99</div>
            <button className="add-to-cart" onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
        </div>
        </section>
       
    )
}

export default Product


