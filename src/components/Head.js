import { Link } from "react-router-dom";

export default function Head(){

    return <div id="head">
        <span id="login"><Link to="/login">Login</Link> </span>
        <span id="addtocart"> <Link to="/cart"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="cart" width='20px' /></Link></span>
    </div>
}