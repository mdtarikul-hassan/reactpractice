// import './App.css'

function Hello(props){
    const name = "Tarikul"

    const headingStyle={
        color:"green",
        textAlign:"center",
        backgroundColor: "pink",
        fontSize: 30
    }

    const fruits = ["apple", "banana", "orange"]

    const user={
        fname: "Tarikul", lname: "Hassan", age: 21
    }

    const users = [
        {fname: "Tarikul", lname: "Hassan", age: 21},
        {fname: "aminur", lname: "sk", age: 22},
        {fname: "raju", lname: "molla", age: 23}
    ]
    function fullname(user){
        return user.fname + " "+ user.lname
    }

    const isLoggedIn = true;
    const isLoggedOut = false;
    let message;

    if(isLoggedIn){
        message = <p>Welcome Home</p>
    }else{
        message = <p>Please Login</p>

    }


    const isVisible = false;
    const visibility=isVisible ? "visiblle": "unvisible"


    return(
        <>
        <h1>Hello {props.name}</h1>
        <h1>age {props.age}</h1>
        <h1>{props.city} city</h1>
        <div>
            <h2>Fruit list</h2>
            <ul>
                {fruits.map((fruits, index) => (
                    <li>{index} - {fruits}</li>
                ))}
            </ul>
        </div>

        <div>
            <h2>user details</h2>
            <p>Full Name : {fullname(user)}</p>
            <p>Age : {user.age}</p>
        </div>

        <div>
            <h2>Users</h2>
            <ul>
                {users.map( (u) => (
                    <li>{fullname(u)} is {u.age} years old</li>
            ))}
            </ul>
           
        </div>
        <div>This is messege for is logged in : {message}</div>
        <div>This is messege for is logged out : {isLoggedOut ? <p>you are logged out</p>: <p>please logint</p>}</div>
        {isLoggedIn && <p>used in && operator</p>}

            <div>
                <h2 className={visibility}>Conditional rendering</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nemo vel doloremque quia impedit optio magnam libero accusantium fugiat sint.</p>
            </div>

            <h2 style={headingStyle}>This is {name} Component</h2>
            <p style={{color:"blue",textAlign:"center"}}>lorem ipsum dolor sit</p>
        </>
    )
}

export default Hello