import { useState } from "react";

function LikeButton(){

    const [isLike, setIsLike] = useState(false)

    return (
        <>
            <button onClick={() => setIsLike(!isLike)}>
                {isLike ? "❤️Liked" : "🤍 Like"} 
            </button>
            
        </>
    )

}
export default LikeButton