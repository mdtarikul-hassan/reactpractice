import { use } from "react";

const UseApi = ({userResource}) => {

    const userData = use(userResource);

    return(
        
        <>
            {userData?.users?.map((user) => {
                <h3>{user.age}</h3>
            })}
        </>
    )
}

export default UseApi